import Image from 'next/image';

import { Button } from '@/components/Button';

import { Car } from '@/@types/Car';

import { StyledRentalCard } from './styles';

interface CarCardProps {
  car: Car;
  handleRentCar: (car: Car) => void;
}

export function RentalCard({car, handleRentCar}: CarCardProps) {
  return (
    <StyledRentalCard disabled={car.available ? false : true}>
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
      </div>

      <div className="btn-container">
        <Button typed="main" size="large" onClick={() => handleRentCar(car)}>Finalizar aluguel</Button>
      </div>
    </StyledRentalCard>
  );
}
