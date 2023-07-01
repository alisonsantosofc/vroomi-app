import Image from 'next/image';
import { formatAmount } from '../../utils/format';

import { Car } from '../../views/Rent';
import { Button } from '../Button';
import { Container } from './styles';

interface CarCardProps {
  car: Car;
  handleRentCar: (car: Car) => void;
}

export function CarCard({car, handleRentCar}: CarCardProps) {
  return (
    <Container>
      <Image
        src={require(`../../../public/cars/${car.id}.png`)}
        alt={car.model}
        width={300}
        height={150}
      />

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

      <div className="brand-container">
        <p>
          <strong>{car.model}</strong>
          <span>{car.brand}</span>
        </p>
      </div>

      <div className="btn-container">
        <Button onClick={() => handleRentCar(car)}>Alugar</Button>
      </div>
    </Container>
  );
}
