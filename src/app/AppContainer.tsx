import { Header } from "@/components/Header";
import { ModalProvider } from "@/hooks/useModal";
import { StyledAppContainer } from "@/styles/global";
import { Footer } from "@/views/Footer";
import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <ModalProvider>
      <StyledAppContainer>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </StyledAppContainer>
    </ModalProvider>
  )
}
