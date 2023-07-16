import { Header } from "@/components/Header";
import { ModalProvider } from "@/hooks/useModal";
import { StyledAppContainer } from "@/styles/global";
import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <ModalProvider>
      <StyledAppContainer className="container">
        <Header />
        {children}
      </StyledAppContainer>
    </ModalProvider>
  )
}
