import { CustomSVG } from "@/components/CustomSVG";

import { StyledFleet } from "./styles";
import { useDarkMode } from "@/hooks/useDarkMode";
import { darkTheme, lightTheme } from "@/styles/themes";

export function Fleet() {
  const { darkMode } = useDarkMode();

  return (
    <StyledFleet className="section" id="fleet">
      <h2 className="section-title">Frota de veículos</h2>
      <span className="section-subtitle">Trabalhamos com as melhores marcas</span>

      <div className="fleet-container container grid">
        <div className="brand-card">
          <CustomSVG.Chevrolet color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Fiat color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Citroen color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Ford color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Chrysler color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Honda color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Kia color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Hyundai color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Lexus color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Nissan color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Peugeot color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Renault color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Suzuki color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Tesla color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Toyota color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
        <div className="brand-card">
          <CustomSVG.Volkswagen color={!darkMode ? lightTheme.colors.title : darkTheme.colors.title} />
        </div>
      </div>
    </StyledFleet>
  )
}
