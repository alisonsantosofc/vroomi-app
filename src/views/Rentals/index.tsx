import AppLink from '@/components/AppLink';
import { RentalsList } from './RentalsList';
import { StyledUserFleet } from './styles';

export function Rentals() {
  return (
    <StyledUserFleet className="user-fleet-container section" >
      <div className="title-content">
        <h2>Sua frota de veículos</h2>

        <div className="links">
          <AppLink title="Favoritos" href="/favs" />
          <AppLink title="Alugar outro carro" href="/rent" />
        </div>
      </div>

      <RentalsList />
    </StyledUserFleet>
  );
}
