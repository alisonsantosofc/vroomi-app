import { RentalsList } from './RentalsList';
import { StyledUserFleet } from './styles';

export function UserFleet() {
  return (
    <StyledUserFleet className="user-fleet-container container" >
      <RentalsList />
    </StyledUserFleet>
  );
}
