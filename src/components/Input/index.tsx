import { InputHTMLAttributes, ReactNode, Ref, forwardRef, useState } from 'react';
import { InputContainer } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
  forwardedref?: Ref<HTMLInputElement> | null;
}

export function Input({icon, label, forwardedref, ...props }: InputProps) {
  const [isActive, setIsActive] = useState(false);

  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    setIsActive(false);
  }

  return (
    <InputContainer isActive={isActive} label={label} >
      <label htmlFor="input">{label}</label>
      {icon}
      <input
        {...props}
        id="input"
        ref={forwardedref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </InputContainer>
  );
}
