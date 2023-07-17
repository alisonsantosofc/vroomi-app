import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.colors.containerBg};
  box-shadow: ${({theme}) => theme.effects.shadowTop};
  width: 100%;

  .footer-container {
    padding: 2rem 0 2rem;

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: ${({theme}) => theme.colors.title};
    }

    .footer-link {
      color: ${({theme}) => theme.colors.title};

      &:hover {
        color: ${({theme}) => theme.effects.hoverLight(theme.colors.title)};
      }
    }

    .footer-list {
      display: flex;
      justify-content: center;
      column-gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .footer-social {
      display: flex;
      justify-content: center;
      column-gap: 1.25rem;

      a {
        background-color: ${({theme}) => theme.colors.title};
        padding: 0.4rem;
        border-radius: 0.5rem;
        display: inline-flex;
        font-size: 1.25rem;

        svg {
          color: ${({theme}) => theme.colors.textContrast};

          &:hover {
            color: ${({theme}) => theme.effects.hoverLight(theme.colors.textContrast)};
          }
        }
      }
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .5rem;
      font-size: 0.9rem;
      margin-top: 4rem;
    }
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 576px) {
    .footer-container {
      p {
        text-align: center;
        font-size: 0.9rem;
      }
    }
  }
`;
