import { RentalsList } from './RentalsList';
import { StyledUserFleet } from './styles';
import { useRentals } from '@/hooks/useRentals';

export function UserFleet() {
  return (
    <StyledUserFleet className="user-fleet-container container" >
      <RentalsList />
    </StyledUserFleet>
  );
}
