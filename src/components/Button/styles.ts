import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  typed?: "success" | "warning" | "info" | "error" | "transparent";
  size?: "small" | "normal" | "large";
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 0.25rem;
  color: ${props => props.color ? props.color : props.theme.colors.buttonText};
  font-size: 1rem;
  font-weight: 500;
  transition: .3s;
  box-shadow: ${({theme}) => theme.effects.shadowAround};
  background: ${({theme, typed}) => typed === "success"
    ? theme.colors.green500
    : typed === "warning"
    ? theme.colors.orange500
    : typed === "info"
    ? theme.colors.blue500
    : typed === "error"
    ? theme.colors.red500
    : typed === "transparent"
    && theme.colors.bodyBg
  };

  color: ${props => props.typed === "transparent" && props.theme.colors.text};

  width: ${props => props.size === "large" ? '100%' : ''};

  padding: ${props => props.size === "small" ? '0.5rem 1rem;' : ''};
  font-size: ${props => props.size === "small" ? '0.9rem' : ''};
  border-radius: ${props => props.size === "small" ? '0.2rem' : ''};

  > * {
    color: ${props => props.color ? props.color : props.theme.colors.buttonText};
  }

  > * {
    color: ${props => props.typed === "transparent" && props.theme.colors.text};
  }

  &:hover {
    background: ${({theme, typed}) => typed === "success"
      ? theme.effects.hoverLight(theme.colors.green500)
      : typed === "warning"
      ? theme.effects.hoverLight(theme.colors.orange500)
      : typed === "info"
      ? theme.effects.hoverLight(theme.colors.blue500)
      : typed === "error"
      ? theme.effects.hoverLight(theme.colors.red500)
      : typed === "transparent"
      && theme.effects.hoverLight(theme.colors.bodyBg)
    };
  }

  svg {
    font-size: 1.4rem;
    margin-left: .6rem;
  }
`;
