import { ReactNode } from "react"
import { StyledRoot } from "./styles"

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <StyledRoot>
      {children}
    </StyledRoot>
  )
}

