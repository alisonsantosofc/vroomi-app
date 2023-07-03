import { ReactNode, Ref, TextareaHTMLAttributes, forwardRef, useState } from 'react';
import { TextareaContainer } from './styles';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode;
  label?: string;
  forwardedref?: Ref<HTMLTextAreaElement> | null;
}

export function Textarea({icon, label, forwardedref, ...props }: TextareaProps) {
  const [isActive, setIsActive] = useState(false);

  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    setIsActive(false);
  }

  return (
    <TextareaContainer isActive={isActive} label={label} >
      <label htmlFor="input">{label}</label>
      {icon}
      <textarea
        {...props}
        id="input"
        ref={forwardedref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TextareaContainer>
  );
}
