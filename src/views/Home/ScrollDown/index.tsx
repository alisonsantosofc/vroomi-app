import { HandTap, MouseSimple, } from "@phosphor-icons/react";

import { StyledScrollDown } from "./styles";
import { ArrowDown } from "phosphor-react";

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
