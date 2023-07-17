import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { StyledFooter } from './styles';

export function Footer() {
  return (
    <StyledFooter>
      <div className="footer-container">
        <h1>Vroomi</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              Politicas de privacidade
            </a>
          </li>
          <li>
            <a href="#projects" className="footer-link">
              Termos de uso
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer-link">
              Sobre direitos autorais
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://github.com/alisonsantosofc" className="footer-social-link" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alisonsantosofc/" className="footer-social-link" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/5581983423876" className="footer-social-link" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        <p>
          Copyright © {new Date().getFullYear()} Vroomi. Todos os direitos reservados.
        </p>
      </div>
    </StyledFooter>
  );
}
