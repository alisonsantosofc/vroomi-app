import { AnchorHTMLAttributes, ReactNode } from "react";
import { CarProfile } from "@phosphor-icons/react";

import { useRentals } from "@/hooks/useRentals";
import { StyledItemsBadge } from "./styles";

interface ItemsBadgeProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  icon: ReactNode;
}

export function ItemsBadge({ icon, ...props }: ItemsBadgeProps) {
  const { rentals } = useRentals();
  
  return (
    <StyledItemsBadge {...props}>
      {icon}

      <span 
        className={`badge ${rentals.length > 0 ? 'show' : ''}`}
      >
        {rentals.length}
      </span>
    </StyledItemsBadge>
  )
}
