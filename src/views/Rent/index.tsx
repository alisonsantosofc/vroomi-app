import { toast } from 'react-toastify';
import { KeyboardEvent, useEffect, useState } from 'react';
import { MagnifyingGlass, SmileySad } from '@phosphor-icons/react';

import { Input } from '../../components/Input';
import { Toast } from '../../components/Toast';
import { Loader } from '../../components/Loader';
import { Button } from '@/components/Button';
import { RentCar } from './RentCar';
import { CarCard } from './CarCard';

import { Car } from '@/@types/Car';
import { useRentals } from '@/hooks/useRentals';
import { useModal } from '@/hooks/useModal';
import { useCars } from '@/hooks/useCars';

import { StyledRent } from './styles';
interface RequestState {
  request: 'pending' | 'success' | 'failed';
}

export function Rent() {
  const { cars, handleSetCars } = useCars();
  const { rentals } = useRentals();
  const { setModalContent } = useModal();

  const [maxDuration, setMaxDuration] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);

  const [monitoringRequest, setMonitoringRequest] = useState<RequestState>({} as RequestState);

  async function handleFindAvailableCars() {
    handleSetCars([]);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const params = new URLSearchParams({
        maxDuration: maxDuration ? String(maxDuration) : '',
        maxDistance: maxDistance ? String(maxDistance) : '',
      });

      setMonitoringRequest({ request: 'pending' });

      const response = await (await fetch(`${apiUrl}/cars?` + params)).json();

      const cars: Car[] = response.cars;
      
      cars.forEach((car) => {
        const isRented = rentals.filter(rental => rental.car.id === car.id);
        const carIndex = cars.findIndex(carFind => carFind.id === car.id);

        if (isRented.length) {
          cars.splice(carIndex, 1, { ...car, available: false });
        }
      });
      
      handleSetCars(cars);

      setMonitoringRequest({ request: 'success' });
    } catch (err) {
      setMonitoringRequest({ request: 'failed' });
      
      toast.error(
        <Toast
          type="error"
          title="Erro no Servidor"
          message="Não foi possível conectar o dispositivo ao servidor, por favor tente novamente mais tarde."
        />
      );
    }
  }

  function handleRentCar(car: Car) {
    setModalContent(<RentCar car={car} onRequestClose={() => setModalContent(null)}/>)
  }

  function handlePressKey(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handleFindAvailableCars();
    }
  }
  
  return (
    <StyledRent className="rent-container" >
      <div className="rent-find">
        <h2>Encontre um carro para alugar</h2>

        <div className="form-content">
          <form>
            <Input 
              placeholder="dias (permanência)"
              type="number"
              onKeyDown={(e) => handlePressKey(e)}
              onChange={(e) => setMaxDuration(Number(e.target.value))}
            />

            <Input
              placeholder="distância (km)"
              type="number"
              onKeyDown={(e) => handlePressKey(e)}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
            />
          </form>

          <Button onClick={() => handleFindAvailableCars()}>Encontrar um carro</Button>
          <MagnifyingGlass weight="bold" onClick={() => handleFindAvailableCars()} />
        </div>
      </div>

      {monitoringRequest.request === 'success' || monitoringRequest.request === 'failed' ? (
        cars.length ? (
          <h4>
            <span>{cars.length}</span> carro
            {cars.length > 1 ? 's estão disponíveis ' : ' está disponível '} para alugar
          </h4>
        ) : (
          <h4 className="not-found">
            <SmileySad size={48} /> Não encontramos nenhum carro com esses critérios!
          </h4>
        )
      ) : (
        ''
      )}

      <div className="cars-list">
        <ul>
          {cars.map((car) => (
            <CarCard car={car} handleRentCar={handleRentCar} key={car.id} />
          ))}
        </ul>
      </div>

      {monitoringRequest.request === 'pending' && (
        <Loader isActive={monitoringRequest.request === 'pending' ? true : false} />
      )}
    </StyledRent>
  );
}
