import styled from 'styled-components';

export const StyledRent = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 10rem;

  .rent-find {
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2rem;
      font-weight: 600;
    }

    .form-content {
      display: flex;
      align-items: center;
      gap: 2rem;

      button {
        display: none;
        background: ${({theme}) => theme.colors.main500};
        justify-content: center;

        &:hover {
          background: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
        }
      }
    }

    form {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    svg {
      padding: 0.5rem;
      font-size: 2rem;
      border-radius: 100%;
      cursor: pointer;
      transition: all ease-in 0.2s;
      background: ${({theme}) => theme.colors.main500};
      color: ${({theme}) => theme.colors.buttonText};
      box-shadow: ${({theme}) => theme.effects.shadowAround};

      &:hover {
        background: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
      }
    }
  }

  h4 {
    width: 100%;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: start;
    margin-top: 1rem;

    &.not-found {
      display: flex;
      align-items: center;

      > svg {
        margin-right: 0.5rem;
      }
    }

    span {
      color: ${({theme}) => theme.colors.main500};
      font-size: 1.8rem;
      font-weight: 700;
    }
  }

  .cars-list{
    width: 100%;

    ul {
      margin-top: 1rem;
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 998px) {
    .cars-list{
      ul {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  /* For medium devices */
  @media screen and (max-width: 768px) {
    padding-top: 2rem;

    .rent-find {
      h2 {
        color: ${({theme}) => theme.colors.white};
      }

      .form-content {
        flex-direction: column;
        gap: 1rem;
        margin-top: 1.5rem;

        button {
          width: 100%;
          display: flex;
        }
      }

      form {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;

        input {
          font-size: 0.9rem;
        }
      }

      svg {
        display: none;
      }
    }

    .cars-list{
      ul {
        grid-template-columns: 1fr;
      }
    }
  }
  @media screen and (max-width: 576px) {
  }
  /* For small devices */
  @media screen and (max-width: 380px) {
    .rent-find {
      .form-content {
      }

      form {
        grid-template-columns: 1fr;
      }
    }
  }
`;
