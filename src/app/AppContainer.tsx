import { ReactNode } from "react";

import { BgSVG } from "@/components/CustomSVG";
import { Header } from "@/components/Header";
import { ModalProvider } from "@/hooks/useModal";
import { StyledAppContainer } from "@/styles/global";
import { Footer } from "@/views/Footer";

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

        <div className="bg-svg">
        <BgSVG.LinesBg />
        </div>
      </StyledAppContainer>
    </ModalProvider>
  )
}
