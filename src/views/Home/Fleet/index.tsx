import { CarBrandSVG } from "@/components/CustomSVG";

import { StyledFleet } from "./styles";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useTheme } from "styled-components";

export function Fleet() {
  const { darkMode } = useDarkMode();
  const { colors } = useTheme();

  return (
    <StyledFleet className="section" id="fleet">
      <h2 className="section-title">Frota de veículos</h2>
      <span className="section-subtitle">Trabalhamos com as melhores marcas</span>

      <div className="fleet-container grid">
        <div className="brand-card">
          <CarBrandSVG.Chevrolet color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Fiat color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Citroen color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Ford color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Chrysler color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Honda color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Kia color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Hyundai color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Lexus color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Nissan color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Peugeot color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Renault color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Suzuki color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Tesla color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Toyota color={!darkMode ? colors.title : colors.title} />
        </div>
        <div className="brand-card">
          <CarBrandSVG.Volkswagen color={!darkMode ? colors.title : colors.title} />
        </div>
      </div>
    </StyledFleet>
  )
}
