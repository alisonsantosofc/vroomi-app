import { useTheme } from "styled-components";
import { SVGComponentProps } from "..";

export function LinesBg({...props}: SVGComponentProps) {
  const {colors} = useTheme();

  return (
    <svg width="1921" height="154" viewBox="0 0 1921 154" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0.000114441 -6.10352e-05H1920V152C1920 152 1949 166.5 1531 96.5C1113 26.5 0.000114441 152 0.000114441 152V-6.10352e-05Z" fill="url(#paint0_linear_5_3)"/>
      <defs>
      <linearGradient id="paint0_linear_5_3" x1="353.6" y1="197.395" x2="1568" y2="197.395" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F47D23"/>
      <stop offset="1" stop-color="#D35209"/>
      </linearGradient>
      </defs>
    </svg>
  )
}
