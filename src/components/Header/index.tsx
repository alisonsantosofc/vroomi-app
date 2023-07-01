import { useState } from "react";
import Link from "next/link";
import { Briefcase, Flask, House, Image, PaperPlaneTilt, SquaresFour, User, X } from "phosphor-react";

import { ToggleDarkMode } from "../ToggleDarkMode";
import { useDarkMode } from "../../hooks/useDarkMode";

import { HeaderContainer } from "./styles";
import { Button } from "../Button";

export function Header() {
  const {darkMode, handleSetDarkMode} = useDarkMode();
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  if (typeof window !== "undefined") {
    /*=== Change background header ===*/
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");

      if (scrollY >= 80) {
        header?.classList.add("scroll-header");
      } else {
        header?.classList.remove("scroll-header");
      }
    });
  }

  return (
    <HeaderContainer className="header">
      <nav className="container">
        <div className="nav-logo">
          <Link href="/" className="logo-link" onClick={() => setActiveSection("home")}>
            Vroomi
          </Link>
          <ToggleDarkMode 
            darkMode={darkMode} 
            onHandleDarkMode={() => handleSetDarkMode()}
            width="small"
          />
        </div>
        

        <div className={`nav-menu ${isOpenMenu ? 'show' : ''}`}>
          <ul className="grid">
            <li>
              <Link 
                href="#home" 
                className={`nav-link ${activeSection === '#home' ? 'active' : ''}`} 
                onClick={() => setActiveSection("#home")}
              >
                <House /> Início
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className={`nav-link ${activeSection === '#about' ? 'active' : ''}`} 
                onClick={() => setActiveSection("#about")}
              >
                <User /> Sobre
              </Link>
            </li>
            <li>
              <Link 
                href="#services"
                className={`nav-link ${activeSection === '#services' ? 'active' : ''}`} 
                onClick={() => setActiveSection("#services")}
              >
                <Briefcase /> Serviços
              </Link>
            </li>
            <li>
              <Link 
                href="#contact"
                className={`nav-link ${activeSection === '#contact' ? 'active' : ''}`} 
                onClick={() => setActiveSection("#contact")}
              >
                <PaperPlaneTilt /> Ajuda
              </Link>
            </li>

            <li className="nav-button">
              <Button size="small">
                <Link 
                  href="/dashboard"
                  onClick={() => setActiveSection("#home")}
                >
                  Entrar na plataforma
                </Link>
              </Button>
            </li>
          </ul>

          <X className="nav-close" onClick={() => setIsOpenMenu(!isOpenMenu)} />
        </div>

        <div className="nav-toggle" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <SquaresFour />
        </div>
      </nav>
    </HeaderContainer>
  )
}
