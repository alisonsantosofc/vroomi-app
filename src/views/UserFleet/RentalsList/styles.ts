import styled from 'styled-components';

export const StyledRentalsList = styled.ul`
  width: 768px;
  grid-template-columns: 1fr;
  gap: 2rem;

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 998px) {
    width: 100%;
  }
  /* For medium devices */
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 576px) {
  }
  /* For small devices */
  @media screen and (max-width: 380px) {
  }
`;
