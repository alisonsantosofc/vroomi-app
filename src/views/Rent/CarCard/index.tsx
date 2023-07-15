import Image from 'next/image';

import { Button } from '@/components/Button';

import { Car } from '@/@types/Car';
import { formatAmount } from '@/utils/format';

import { StyledCarCard } from './styles';

interface CarCardProps {
  car: Car;
  handleRentCar: (car: Car) => void;
}

export function CarCard({car, handleRentCar}: CarCardProps) {
  return (
    <StyledCarCard disabled={car.available ? false : true}>
      <Image
        src={require(`../../../../public/cars/${car.id}.png`)}
        alt={car.model}
        width={300}
        height={150}
      />

      <div className="brand-container">
        <p>
          <strong>{car.model}</strong>
          <span>{car.brand}</span>
        </p>
      </div>

      <div className="info-container">
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
          Preço por km:{' '}
          <span>
            {formatAmount({
              amount: car.pricePerKm,
              currency: 'BRL',
              lang: 'pt-br',
            })}
          </span>
        </p>
      </div>

      <div className="btn-container">
        <Button typed="main" size="large" onClick={() => handleRentCar(car)}>Alugar</Button>
      </div>
    </StyledCarCard>
  );
}
