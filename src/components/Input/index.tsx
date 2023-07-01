import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { Container } from './styles';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  );
}
