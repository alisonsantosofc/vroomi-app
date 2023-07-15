import { useRentals } from "@/hooks/useRentals";
import { StyledRentalsList } from "./styles";

export function RentalsListPopover() {
  const { rentals } = useRentals();
  return (
    <StyledRentalsList>
      {rentals.map(rental => (
        <div className="rental-popover-card " key={rental.carId}>
          <strong>{rental.carModel}</strong>
          <span>retornar em {rental.expectedReturnDate.toLocaleDateString("pt-BR")}</span>
        </div>
      ))}
    </StyledRentalsList>
  )
}