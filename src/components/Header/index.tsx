import { useState } from "react";
import Link from "next/link";
import { Briefcase, House, PaperPlaneTilt, SignIn, SquaresFour, User, UserPlus, X } from "@phosphor-icons/react";

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
                href="/#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                onClick={() => setActiveSection("home")}
              >
                <House /> Início
              </Link>
            </li>
            <li>
              <Link 
                href="/#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                onClick={() => setActiveSection("about")}
              >
                <User /> Sobre
              </Link>
            </li>
            <li>
              <Link 
                href="/#fleet"
                className={`nav-link ${activeSection === 'fleet' ? 'active' : ''}`} 
                onClick={() => setActiveSection("fleet")}
              >
                <Briefcase /> Frota
              </Link>
            </li>
            <li>
              <Link 
                href="/#support"
                className={`nav-link ${activeSection === 'support' ? 'active' : ''}`} 
                onClick={() => setActiveSection("support")}
              >
                <PaperPlaneTilt /> Ajuda
              </Link>
            </li>
          </ul>

          <X className="nav-close" onClick={() => setIsOpenMenu(!isOpenMenu)} />
        </div>

        <div className="btn-container">
          <Button 
            size="small" 
            className="nav-button signin"
            icon={<SignIn />}
          >
            <Link 
              href="/signin"
            >
              Entrar
            </Link>
          </Button>

          <Button 
            size="small" 
            className="nav-button signup"
            icon={<UserPlus />}
          >
            <Link 
              href="/signup"
            >
              Criar conta
            </Link>
          </Button>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <SquaresFour />
        </div>
      </nav>
    </HeaderContainer>
  )
}
