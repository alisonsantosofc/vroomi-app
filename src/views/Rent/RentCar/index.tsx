import Image from 'next/image';

import { Button } from '@/components/Button';

import { Car } from '@/@types/Car';

import { formatAmount } from '@/utils/format';

import { StyledRentCar } from './styles';
import { useRentals } from '@/hooks/useRentals';
import dayjs from 'dayjs';


interface RentCarProps {
  onRequestClose: () => void;
  car: Car;
}

export function RentCar({ car, onRequestClose }: RentCarProps) {
  const { createRental } = useRentals();

  async function handleCreateRental() {
    const expectedReturnDate = dayjs().add(car.availability.maxDuration, "days").toDate();
    
    createRental(car, expectedReturnDate);

    onRequestClose();
  }

  return (
    <StyledRentCar>
      {car.id && (
        <Image
          src={require(`../../../../public/cars/${car.id}.png`)}
          alt={car.model}
          width={600}
          height={300}
        />
      )}

      <div className="brand-container">
        <h2>{car.model}</h2>
        <span>{car.brand}</span>
      </div>

      <div className="info-container">
        <div className="price-content">
          <p>
            Preço por dia:{' '}
            <span>
              {formatAmount({
                amount: car.pricePerDay,
                currency: 'BRL',
                lang: 'pt-br',
              })}
            </span>
          </p>

          <p>
            {'Preço por km: '}
            <span>
              {formatAmount({
                amount: car.pricePerKm,
                currency: 'BRL',
                lang: 'pt-br',
              })}
            </span>
          </p>
        </div>

        <div className="limit-content">
          <p>
            {'Limite de permanência: '}
            <span>
              {`${car?.availability?.maxDuration} ${car?.availability?.maxDuration > 1 ? 'dias' : 'dia'}`}
            </span>
          </p>

          <p>
            {'Limite de km rodados: '}
            <span>
              {`${car?.availability?.maxDistance} Km`}
            </span>
          </p>
        </div>
      </div>

      <Button typed="main" size="large" onClick={handleCreateRental}>Alugar agora</Button>
    </StyledRentCar>
  );
}
