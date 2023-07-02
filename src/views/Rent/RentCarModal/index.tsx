import Image from 'next/image';
import ReactModal from 'react-modal';
import { X } from "@phosphor-icons/react";

import { Button } from '@/components/Button';
import { Car } from '@/views/Rent';

import { formatAmount } from '@/utils/format';

import { Container } from './styles';

interface RentCarModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  car: Car;
}

export function RentCarModal({ car, isOpen, onRequestClose }: RentCarModalProps) {
  function handleCloseModal() {
    onRequestClose();
  }

  async function handleCreateNewTransaction() {
    handleCloseModal();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <X weight="bold" onClick={() => onRequestClose()} />

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

          <p>
            Limite por dia:{' '}
            <span>
              {car.maxDuration} {car.maxDuration > 1 ? 'dias' : 'dia'}
            </span>
          </p>

          <p>
            Limite por km: <span>{car.maxDistance} Km</span>
          </p>
        </div>

        <Button size="large">Alugar agora</Button>
      </Container>
    </ReactModal>
  );
}
