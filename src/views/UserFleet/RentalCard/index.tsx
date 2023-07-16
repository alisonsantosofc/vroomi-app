import Image from 'next/image';

import { Button } from '@/components/Button';
import { getCarBrandSVG } from "@/components/CustomSVG";

import { Car } from '@/@types/Car';

import { StyledRentalCard } from './styles';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useTheme } from 'styled-components';
import { formatAmount } from '@/utils/format';

interface CarCardProps {
  car: Car;
  expectedReturnDate: Date;
  handleFinishRental: (carId: number, expectedReturnDate: Date) => void;
}

export function RentalCard({car, expectedReturnDate, handleFinishRental}: CarCardProps) {
  const { darkMode } = useDarkMode();
  const { colors } = useTheme();

  const elementColor = !darkMode ? colors.title : colors.title;

  return (
    <StyledRentalCard disabled={car.available ? false : true}>
      <Image
        src={require(`../../../../public/cars/${car.id}.png`)}
        alt={car.model}
        width={320}
        height={150}
      />

      <div className="rent-data-container">
        <div className="brand-container">
          <p>
            <strong>{car.model}</strong>
            <span>{car.brand}</span>
          </p>

          {getCarBrandSVG(car.brand, colors, darkMode)}
        </div>

        <div className="info-container">
          <div className="limit-content">
            <p>
              {'Você pode permanecer até: '}
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

          <div className="limit-exceeded-content">
            <p>
              {'Dias ultrapassado: '}
              <span>
                {`${car?.availability?.maxDuration} ${car?.availability?.maxDuration > 1 ? 'dias' : 'dia'}`}
              </span>
            </p>

            <p>
              {'Kms ultrapassados: '}
              <span>
                {`${car?.availability?.maxDistance} Km`}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <Button typed="main" size="large" onClick={() => handleFinishRental(car.id, expectedReturnDate)}>Finalizar aluguel</Button>
      </div>
    </StyledRentalCard>
  );
}
