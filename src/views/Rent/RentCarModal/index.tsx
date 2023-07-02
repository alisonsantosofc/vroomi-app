import Image from 'next/image';
import ReactModal from 'react-modal';
import { X } from "@phosphor-icons/react";

import { Button } from '@/components/Button';
import { Car } from '@/views/Rent';

import { formatAmount } from '@/utils/format';

import { StyledRentCarModal } from './styles';

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
      ariaHideApp={false}
    >
      <StyledRentCarModal>
        <X className="btn-close" weight="bold" onClick={() => onRequestClose()} />

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

          <div className="limit-content">
            <p>
              Limite por dia:{' '}
              <span>
                {car?.availability?.maxDuration} {car?.availability?.maxDuration > 1 ? 'dias' : 'dia'}
              </span>
            </p>

            <p>
              Limite por km: <span>{car?.availability?.maxDistance} Km</span>
            </p>
          </div>
        </div>

        <Button size="large">Alugar agora</Button>
      </StyledRentCarModal>
    </ReactModal>
  );
}
