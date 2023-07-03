import styled from "styled-components";

export const StyledFleet = styled.section`
  justify-content: center;
  margin-bottom: 2rem;

  .support-container {
    position: relative;
    width: 676px;

    form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .user-data {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    > svg {
      z-index: -1;
      position: absolute;
      top: -12rem;
      right: -4rem;
      font-size: 15rem;
      color: ${({theme}) => theme.colors.shapeBg};
    }
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;

    button {
      justify-content: center;

      &:last-child {
        background: ${({theme}) => theme.colors.main500};

        &:hover {
          background: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
        }
      }
    }
  }

  .contact-container {
    margin-top: 3rem;

    h2 {
      margin-bottom: 1rem;
    }

    .contact-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .contact-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0.75rem;
      padding: 1rem;
      box-shadow: ${({theme}) => theme.effects.shadowAround};
      background: ${({theme}) => theme.colors.containerBg};
      
      > svg {
        font-size: 2.5rem;
      }

      &:first-child {
        svg {
          color: ${({theme}) => theme.colors.green500};
        }
      }

      &:last-child {
        svg {
          color: ${({theme}) => theme.colors.main500};
        }
      }

      span {
        margin-top: 0.2rem;
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.8rem;

        svg {
          transition: .3s;
        }

        &:hover {
          svg {
            transform: translateX(0.25rem);
          }
        }
      }
    }
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 992px) {
    .support-container {
      width: auto;

      .user-data {
        grid-template-columns: 1fr 1fr;
      }
    }

    .btn-container {
      button {
        font-size: 0.9rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    overflow-x: hidden;
    
    .contact-container {
      .contact-cards {
        grid-template-columns: 1fr;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .support-container {
      .user-data {
        grid-template-columns: 1fr;
      }
    }

    .btn-container {
      grid-template-columns: 1fr;
    }
  }
  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;
