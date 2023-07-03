import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  p {
    text-align: center;
    font-size: 0.9rem;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
