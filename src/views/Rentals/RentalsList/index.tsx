import { useRentals } from "@/hooks/useRentals";
import { StyledRentalsList } from "./styles";
import { CarCard } from "../CarCard";

export function RentalsList() {
  const { rentals, finishRental } = useRentals();
  
  return (
    <StyledRentalsList className="grid">
      {rentals.map(rental => (
        <CarCard 
          car={rental.car} 
          handleFinishRental={finishRental}
          expectedReturnDate={rental.expectedReturnDate} 
          key={rental.car.id}
        />
      ))}
    </StyledRentalsList>
  )
}