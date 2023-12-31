
import { CarCard } from './CarCard';
import AppLink from '@/components/AppLink';
import { RentCar } from '@/components/App/RentCar';

import { Car } from '@/@types/Car';
import { useModal } from '@/hooks/useModal';
import { useCars } from '@/hooks/useCars';

import { StyledFavs } from './styles';

export function Favs() {
  const { likedCars } = useCars();
  const { setModalContent } = useModal();

  function handleRentCar(car: Car) {
    setModalContent(<RentCar car={car} onRequestClose={() => setModalContent(null)}/>)
  }
  
  return (
    <StyledFavs>
      <div className="title-content">
        <h2>Seus carros favoritos</h2>

        <div className="links">
          <AppLink title="Carros alugados" href="/rentals" />
          <AppLink title="Alugar outro carro" href="/rent" />
        </div>
      </div>
      <div className="cars-list">
        <ul>
          {likedCars.map((car) => (
            <CarCard car={car} handleRentCar={handleRentCar} key={car.id} />
          ))}
        </ul>
      </div>
    </StyledFavs>
  );
}
