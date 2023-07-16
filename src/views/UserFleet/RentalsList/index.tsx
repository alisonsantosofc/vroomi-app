import { useRentals } from "@/hooks/useRentals";
import { StyledRentalsList } from "./styles";
import { RentalCard } from "../RentalCard";

export function RentalsList() {
  const { rentals, finishRental } = useRentals();
  
  return (
    <StyledRentalsList className="grid">
      {rentals.map(rental => (
        <RentalCard 
          car={rental.car} 
          handleFinishRental={finishRental}
          expectedReturnDate={rental.expectedReturnDate} 
          key={rental.car.id}
        />
      ))}
    </StyledRentalsList>
  )
}