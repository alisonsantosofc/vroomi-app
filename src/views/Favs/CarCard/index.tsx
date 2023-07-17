import Image from 'next/image';

import { Button } from '@/components/Button';
import LikeButton from '@/components/LikeButton';

import { Car } from '@/@types/Car';
import { formatAmount } from '@/utils/format';
import { useCars } from '@/hooks/useCars';

import { StyledCarCard } from './styles';
import { useRentals } from '@/hooks/useRentals';

interface CarCardProps {
  car: Car;
  handleRentCar: (car: Car) => void;
}

export function CarCard({car, handleRentCar}: CarCardProps) {
  const { handleLikedCar } = useCars();
  const { rentals, setRentals } = useRentals();

  return (
    <StyledCarCard>
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

        <LikeButton liked={car.like} handleLiked={() => handleLikedCar(car)}  />
        <span>{`até ${car.availability.maxDistance} km`}</span>
      </div>

      <div className="btn-container">
        <Button typed="main" size="large" onClick={() => handleRentCar(car)}>Alugar</Button>
      </div>
    </StyledCarCard>
  );
}
