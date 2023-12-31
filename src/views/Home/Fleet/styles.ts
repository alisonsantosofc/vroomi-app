import styled from "styled-components";

export const StyledFleet = styled.section`
  margin-bottom: 4rem;

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
    background: ${({theme}) => theme.colors.containerBg};
    border-radius: 0.75rem;
    transition: .3s;

    &:hover {
      background: ${({theme}) => theme.effects.hoverLight(theme.colors.containerBg)};
    }

    svg {
      width: 4rem;
      height: auto;
    }
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 992px) {
    .fleet-container {
      width: auto;
    }
  }
  @media screen and (max-width: 576px) {
    .fleet-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;