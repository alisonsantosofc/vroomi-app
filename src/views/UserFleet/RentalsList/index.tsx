import { useRentals } from "@/hooks/useRentals";
import { StyledRentalsList } from "./styles";

export function RentalsList() {
  const { rentals } = useRentals();
  
  return (
    <StyledRentalsList>
      {rentals.map(rental => (
        <div className="rental-card" key={rental.car.id}>
          <strong>{rental.car.model}</strong>
          <span>retornar em {rental.expectedReturnDate.toLocaleDateString("pt-BR")}</span>
        </div>
      ))}
    </StyledRentalsList>
  )
}