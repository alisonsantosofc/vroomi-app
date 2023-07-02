import { HandTap, MouseSimple, ArrowDown} from "@phosphor-icons/react";

import { StyledScrollDown } from "./styles";

export function ScrollDown() {
  return (
    <StyledScrollDown>
      <a href="#about" className="scrolldown-button">
        <p className="mouse-simple">
          <MouseSimple />
          <span>Rolar para baixo</span>
        </p>
        
        <p className="hand-tap">
          <HandTap  />
          <span>Mover para cima</span>
        </p>
        <ArrowDown className="arrow-down" />
      </a>
    </StyledScrollDown>
  )
}
