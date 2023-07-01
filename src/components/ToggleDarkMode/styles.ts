import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

interface ToggleDarkModeContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  width: 'small' | 'large';
}

export const ToggleDarkModeContainer = styled.div<ToggleDarkModeContainerProps>`
  label {
    position: absolute;
    width: ${({width}) => width === 'small' ? '1.5rem' : '1rem'};
    height: ${({width}) => width === 'small' ? '1.5rem' : '1rem'};
    background-color: ${({theme}) => theme.colors.text};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden ;
  }

  input {
    display: none;
  }

  svg {
    &.sun-icon {
      position: absolute;
      left: 4%;
      font-size: ${({width}) => width === 'small' ? '1rem' : '1.5rem'};
      color: ${({theme}) => theme.colors.textContrast};
      margin: 0 0.2rem;
      transition: .3s;
    }

    &.moon-icon {
      position: absolute;
      right: 15%;
      font-size: ${({width}) => width === 'small' ? '1rem' : '1.5rem'};
      color: ${({theme}) => theme.colors.textContrast};
      transition: .3s;
    }
  }

  .sun-icon.light-selected {
    transform: translateX(2.2rem);
  }

  .moon-icon.dark-selected {
    transform: translateX(-2.2rem);
  }
`;
