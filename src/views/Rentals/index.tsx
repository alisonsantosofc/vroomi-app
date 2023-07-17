import { RentalsList } from './RentalsList';
import { StyledUserFleet } from './styles';

export function Rentals() {
  return (
    <StyledUserFleet className="user-fleet-container section" >
      <RentalsList />
    </StyledUserFleet>
  );
}
