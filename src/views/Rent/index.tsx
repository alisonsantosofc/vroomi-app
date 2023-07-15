import { toast } from 'react-toastify';
import { KeyboardEvent, useEffect, useState } from 'react';
import { MagnifyingGlass, SmileySad } from '@phosphor-icons/react';

import { Input } from '../../components/Input';
import { Toast } from '../../components/Toast';
import { Loader } from '../../components/Loader';
import { Button } from '@/components/Button';
import { RentCarModal } from './RentCarModal';
import { CarCard } from './CarCard';

import { Car } from '@/@types/Car';

import { StyledRent } from './styles';
import { useRentals } from '@/hooks/useRentals';

interface RequestState {
  request: 'pending' | 'success' | 'failed';
}

export function Rent() {
  const { rentals } = useRentals();

  const [cars, setCars] = useState<Car[]>([]);
  const [maxDuration, setMaxDuration] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);

  const [carSeletedToRent, setCarSeletedToRent] = useState<Car>({} as Car);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [monitoringRequest, setMonitoringRequest] = useState<RequestState>({} as RequestState);

  async function handleFindAvailableCars() {
    setCars([]);

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
        const isRented = rentals.filter(rental => rental.carId === car.id);
        const carIndex = cars.findIndex(carFind => carFind.id === car.id);

        if (isRented.length) {
          cars.splice(carIndex, 1, { ...car, available: false });
        }
      });
      
      setCars(cars);

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
    setCarSeletedToRent(car);
    setIsOpenModal(true);
  }

  function handlePressKey(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handleFindAvailableCars();
    }
  }

  useEffect(() => {
    handleFindAvailableCars();
  }, [rentals.length]);
  
  return (
    <StyledRent className="rent-container container" >
      <div className="rent-find">
        <h2>Encontre um carro para alugar</h2>

        <div className="form-content">
          <form>
            <Input 
              label="dias (permanência)"
              type="number"
              onKeyDown={(e) => handlePressKey(e)}
              onChange={(e) => setMaxDuration(Number(e.target.value))}
            />

            <Input
              label="distância (km)"
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

      <RentCarModal
        car={carSeletedToRent}
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(!isOpenModal)}
      />
    </StyledRent>
  );
}
