import styled from 'styled-components';

export const StyledRentalsList = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .rental-popover-card {
    display: flex;
    flex-direction: column;
    font-size: .9rem;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: ${({theme}) => theme.colors.bodyBg};

    strong {
      font-weight: 600;
    }

    span {
      font-size: .8rem;
    }
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 998px) {
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
