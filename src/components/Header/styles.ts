import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({theme}) => theme.colors.bodyBg};

  &.scroll-header {
    box-shadow: ${({theme}) => theme.effects.shadowBottom};
  }

  nav {
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;

    .nav-logo {
      display: flex;

      a {
        font-size: 1.5rem;
        font-weight: 700;
        margin-right: 0.5rem;
        letter-spacing: 1px;
      }
    }

    .nav-menu {
      ul {
        display: flex;
        column-gap: 2rem;
        height: 2rem;

        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .nav-link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          color: ${({theme}) => theme.colors.text};
          font-weight: 500;
          transition: .3s; 
          height: 100%;
          
          &:hover {
            color: ${({theme}) => theme.effects.hoverLight(theme.colors.title)};
          }

          &.active {
            color: ${({theme}) => theme.colors.title};
          }

          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  .btn-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-toggle {
    svg {
      font-size: 2rem;
      color: ${({theme}) => theme.colors.text};
    }
  }
  
  .nav-link svg,
  .nav-close,
  .nav-toggle {
    display: none;
  }

  /*=== Breakpoints ===*/
  /* For medium devices */
  @media screen and (max-width: 768px) {
    top: initial;
    bottom: 0;

    nav {
      height: 3.5rem;

      .nav-logo {
        a {
          font-size: 1rem;
        }
      }

      .nav-menu {
        position: fixed;
        bottom: -100%;
        right: 0;
        width: 100%;
        background-color: ${({theme}) => theme.colors.bodyBg};
        box-shadow: ${({theme}) => theme.effects.shadowTop};
        border-radius: 1.5rem 1.5rem 0 0;
        transition: all 2s;
        padding-top: 1rem;
        padding-bottom: 3rem;

        &.show {
          bottom: 0;
          animation: menu_animate 1s ease-in-out .5s 1;
        }

        .nav-close {
          position: absolute;
          right: 1rem;
          top: 1rem;
          font-size: 1.2rem;
          cursor: pointer;
          color: ${({theme}) => theme.colors.title};

          &:hover {
            color: ${({theme}) => theme.effects.hoverLight(theme.colors.title)};
          }
        }

        ul {
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;

          .nav-link {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.9rem;
            color: ${({theme}) => theme.colors.text};
            font-weight: 1.1rem;
            transition: .3s; 

            &.active {
              color: ${({theme}) => theme.colors.main500};

              &::before {
                display: none;
              }
            }
          }
        }
      }
    }

    .nav-toggle {
      cursor: pointer;

      svg {
        font-size: 2rem;
      }
    }

    .nav-link svg,
    .nav-close,
    .nav-toggle {
      display: block;
    }
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    nav {
      .nav-menu {
        ul {
          column-gap: 0;
        }
      }
    }
  }

  @keyframes menu_animate {
    0% {
      border-radius: 100% 1.5rem 0 0;
    }

    100% {
      border-radius: 1.5rem 1.5rem 0 0;
    }
  }
`;