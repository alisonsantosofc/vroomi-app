import styled from "styled-components";

export const StyledFleet = styled.section`
  margin-bottom: 6rem;

  .fleet-container {
    width: 768px;
    background: ${({theme}) => theme.colors.containerBg};
    padding: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-radius: 0.25rem;
    box-shadow: ${({theme}) => theme.effects.shadowAround};
  }

  .brand-card {
    display: flex;
    justify-content: center;
    padding: 1rem;
    box-shadow: ${({theme}) => theme.effects.shadowAround};
    border-radius: 0.75rem;

    img {
      width: 48px;
    }
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 992px) {
  }
  /* For medium devices */
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 576px) {
  }
  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;