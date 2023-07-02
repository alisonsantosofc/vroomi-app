import styled from "styled-components";

export const StyledAbout = styled.section`
  margin-bottom: 4rem;

  .about-container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 14rem;

    .about-info {
      .info-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;

        .about-box {
          background-color: ${({theme}) => theme.colors.containerBg};
          box-shadow: ${({theme}) => theme.effects.shadowAround};
          border-radius: 0.75rem;
          text-align: center;
          padding: 1rem 1.25rem;

          svg {
            font-size: 2.5rem;
            color: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
          }

          div {
            p {
              font-size: 0.9rem;

              span {
                color: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
                font-size: 1rem;
                font-weight: 500;
              }
            }
          }
        }
      }
    }

    .img-container {
      position: absolute;
      bottom: -16rem;
      left: 0;

      &.active-animate {
        animation: wheel_animate 8s ease-in-out .3s 1;
      }

      &.after-animate {
        left: 60%;
      }

      @keyframes wheel_animate {
        0% {
          left: 0;
        }

        100% {
          left: 60%;
        }
      }
    }
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 992px) {
    .about-container {
      flex-direction: column;
      left: 0;

      .img-container {
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        
        &.active-animate {
          animation: none;
        }

        &.after-animate {
          left: 0;
        }
      }
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .about-container {
      .about-info {
        > p {
          padding: 0;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .about-info {
      .info-container {
        display: flex;
        flex-direction: column;
      }
    }

    .about-container {
      .img-container {
        bottom: -14rem;
      }
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;