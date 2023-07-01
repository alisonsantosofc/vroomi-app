import styled from 'styled-components';

export const Container = styled.input`
  background: var(--gray-700);
  color: var(--gray-100);
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.25rem;
  border: 2px solid transparent;
  transition: border 0.2s ease-in;

  &:focus-visible {
    outline: none;
    border-color: var(--main-color);
  }
`;
