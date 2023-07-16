import { Chevrolet } from "./CarBrandSVG/Chevrolet";
import { Chrysler } from "./CarBrandSVG/Chrysler";
import { Citroen } from "./CarBrandSVG/Citroen";
import { Fiat } from "./CarBrandSVG/Fiat";
import { Ford } from "./CarBrandSVG/Ford";
import { Honda } from "./CarBrandSVG/Honda";
import { Hyundai } from "./CarBrandSVG/Hyundai";
import { Kia } from "./CarBrandSVG/Kia";
import { Lexus } from "./CarBrandSVG/Lexus";
import { Nissan } from "./CarBrandSVG/Nissan";
import { Peugeot } from "./CarBrandSVG/Peugeot";
import { Renault } from "./CarBrandSVG/Renault";
import { Suzuki } from "./CarBrandSVG/Suzuki";
import { Tesla } from "./CarBrandSVG/Tesla";
import { Toyota } from "./CarBrandSVG/Toyota";
import { Volkswagen } from "./CarBrandSVG/Volkswagen";

export interface SVGComponentProps {
  color?: string;
}

export function getCarBrandSVG(carBrand: string, colors: any, darkMode: boolean) {
  switch (carBrand) {
    case 'Chevrolet':
      return (<Chevrolet color={!darkMode ? colors.title : colors.title} />);
    case 'Fiat':
      return (<Fiat color={!darkMode ? colors.title : colors.title} />);
    case 'Citroen':
      return (<Citroen color={!darkMode ? colors.title : colors.title} />);
    case 'Ford':
      return (<Ford color={!darkMode ? colors.title : colors.title} />);
    case 'Chrysler':
      return (<Chrysler color={!darkMode ? colors.title : colors.title} />);
    case 'Honda':
      return (<Honda color={!darkMode ? colors.title : colors.title} />);
    case 'Kia Motors':
      return (<Kia color={!darkMode ? colors.title : colors.title} />);
    case 'Hyundai':
      return (<Hyundai color={!darkMode ? colors.title : colors.title} />);
    case 'Lexus':
      return (<Lexus color={!darkMode ? colors.title : colors.title} />);
    case 'Nissan':
      return (<Nissan color={!darkMode ? colors.title : colors.title} />);
    case 'Peugeot':
      return (<Peugeot color={!darkMode ? colors.title : colors.title} />);
    case 'Renault':
      return (<Renault color={!darkMode ? colors.title : colors.title} />);
    case 'Suzuki':
      return (<Suzuki color={!darkMode ? colors.title : colors.title} />);
    case 'Tesla':
      return (<Tesla color={!darkMode ? colors.title : colors.title} />);
    case 'Toyota':
      return (<Toyota color={!darkMode ? colors.title : colors.title} />);
    case 'Volkswagen':
      return (<Volkswagen color={!darkMode ? colors.title : colors.title} />);
  
    default:
      return null;
  }
}

export const CarBrandSVG = {
  Chevrolet: Chevrolet,
  Chrysler: Chrysler,
  Citroen: Citroen,
  Fiat: Fiat,
  Ford: Ford,
  Honda: Honda,
  Hyundai: Hyundai,
  Kia: Kia,
  Lexus: Lexus,
  Nissan: Nissan,
  Peugeot: Peugeot,
  Renault: Renault,
  Suzuki: Suzuki,
  Tesla: Tesla,
  Toyota: Toyota,
  Volkswagen: Volkswagen,
}