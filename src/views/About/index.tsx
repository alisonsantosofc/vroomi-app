import { AboutInfo } from "./Info";

import { StyledAbout } from "./styles";
import Image from "next/image";

export function About() {
  if (typeof window !== "undefined") {
    /*=== Change background header ===*/
    window.addEventListener("scroll", () => {
      const imgContainer = document.querySelector(".img-container");

      if (scrollY >= 800) {
        imgContainer?.classList.add("active-animate");
      }

      setTimeout(() => {
        imgContainer?.classList.add("after-animate");
      }, 8000);
    });
  }

  return (
    <StyledAbout className="section" id="about">
      <h2 className="section-title">Descubra nossa paixão</h2>
      <span className="section-subtitle">Nosso propósito é fornecer a melhor experiência</span>

      <div className="about-container container">
        <div className="about-info">
          <AboutInfo />

          <p>
            Com o Vroomi, você tem acesso a um aplicativo web inovador que torna
            o aluguel de carros uma experiência descomplicada e conveniente. Nossa 
            plataforma oferece uma ampla seleção de veículos modernos e bem cuidados, 
            disponíveis para aluguel a preços competitivos.
          </p>
        </div>

        <div className="img-container">
          <Image src="/car.png" width={400} height={10} alt="wheel" />
        </div>
      </div>
    </StyledAbout>
  )
}
