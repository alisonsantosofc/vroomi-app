import { Header } from "@/components/Header";
import { StyledAppContainer } from "@/styles/global";
import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <StyledAppContainer className="container">
      <Header />
      {children}
    </StyledAppContainer>
  )
}
