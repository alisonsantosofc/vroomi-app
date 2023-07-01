import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  typed?: "success" | "warning" | "info" | "error" | "transparent";
  size?: "small" | "normal" | "large";
  icon?: ReactNode;
}

export function Button({ children, color, typed, size, icon, ...props }: ButtonProps) {
  return (
    <StyledButton size={size} color={color} typed={typed} {...props}>
      {children}
      {icon}
    </StyledButton>
  );
}
