import Image from 'next/image';

import { Button } from '@/components/Button';

import { Car } from '@/@types/Car';

import { formatAmount } from '@/utils/format';

import { StyledRentCar } from './styles';
import { useRentals } from '@/hooks/useRentals';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { getCarBrandSVG } from '@/components/CustomSVG';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useTheme } from 'styled-components';


interface RentCarProps {
  onRequestClose: () => void;
  car: Car;
}

export function RentCar({ car, onRequestClose }: RentCarProps) {
  const { createRental } = useRentals();
  const { darkMode } = useDarkMode();
  const { colors } = useTheme();
  const router = useRouter();

  async function handleCreateRental() {
    const expectedReturnDate = dayjs().add(car.availability.maxDuration, "days").toDate();
    
    createRental(car, expectedReturnDate);

    // router.push('/rentals');
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
        <div>
          <h2>{car.model}</h2>
          <span>{car.brand}</span>
        </div>

        {getCarBrandSVG(car.brand, colors, darkMode)}
      </div>

      <div className="info-container">
        <div className="price-content">
          <p>
            {'Preço por dia: '}
            <span>
              {formatAmount({
                amount: car.pricePerDay,
                currency: 'BRL',
                lang: 'pt-br',
              })}
            </span>
          </p>

          <p>
            {'Preço por km adicional: '}
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
            {'Franquia de Kms: '}
            <span>
              {`${car?.availability?.maxDistance} Kms`}
            </span>
          </p>
        </div>
      </div>

      <Button typed="main" size="large" onClick={handleCreateRental}>Alugar agora</Button>
    </StyledRentCar>
  );
}
