import { toast } from 'react-toastify';
import { KeyboardEvent, useState } from 'react';
import { MagnifyingGlass, SmileySad } from '@phosphor-icons/react';

import { Input } from '../../components/Input';
import { Toast } from '../../components/Toast';
import { Loader } from '../../components/Loader';
import { RentCarModal } from './RentCarModal';
import { CarCard } from './CarCard';

import { StyledRent } from './styles';

export interface Car {
  id: string;
  brand: string;
  model: string;
  pricePerDay: number;
  pricePerKm: number;
  maxDuration: number;
  maxDistance: number;
}

interface RequestState {
  request: 'pending' | 'success' | 'failed';
}

export function Rent() {
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

      console.log(response);
      
      setCars(response.cars);

      setMonitoringRequest({ request: 'success' });
    } catch (err) {
      setMonitoringRequest({ request: 'failed' });

      console.log(err);
      
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

  return (
    <StyledRent className="rent-container container" >
      <div>
        <h2>Encontre um carro para alugar</h2>

        <form>
          {/* <label htmlFor="maxDuration">
            dias{' '}
            <Input
              id="maxDuration"
              type="number"
              onKeyDown={(e) => handlePressKey(e)}
              onChange={(e) => setMaxDuration(Number(e.target.value))}
            />
          </label> */}

          <Input label="dias" />

          <label htmlFor="maxDistance">
            distância (km){' '}
            <Input
              id="maxDistance"
              type="number"
              onKeyDown={(e) => handlePressKey(e)}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
            />
          </label>

          <MagnifyingGlass weight="bold" onClick={() => handleFindAvailableCars()} />
        </form>
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

      <div className="cars-list-container">
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
