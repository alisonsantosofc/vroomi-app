import { ReactNode } from "react";
import { CarProfile } from "@phosphor-icons/react";

import { useRentals } from "@/hooks/useRentals";
import { StyledTrigger } from "./styles";

interface TriggerProps {
  setIsOpenPopover: () => void;
  icon: ReactNode;
}

export function Trigger({ setIsOpenPopover, icon }: TriggerProps) {
  const { rentals } = useRentals();
  
  return (
    <StyledTrigger onClick={() => setIsOpenPopover()}>
      {icon}

      <span 
        className={`badge ${rentals.length > 0 ? 'show' : ''}`}
      >
        {rentals.length}
      </span>
    </StyledTrigger>
  )
}
