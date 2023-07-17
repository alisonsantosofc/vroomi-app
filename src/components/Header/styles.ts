import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  &.scroll-header {
    box-shadow: ${({theme}) => theme.effects.shadowBottom};
    background-color: ${({theme}) => theme.colors.bodyBg};

    .nav-logo {
      a {
        color: ${({theme}) => theme.colors.text};
      }
    }

    .nav-menu {
      ul {
        .nav-link {
          color: ${({theme}) => theme.colors.text};

          &.active {
            color: ${({theme}) => theme.colors.title};
          }
        }
      }
    }

    .btn-container {
      a {
        svg {
          color: ${({theme}) => theme.colors.text};
        }

        .badge {
          background:  ${({theme}) => theme.colors.red500};
        }
      }
    }
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
        color: ${({theme}) => theme.colors.white};
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
          color: ${({theme}) => theme.colors.white};
          font-weight: 500;
          transition: .3s; 
          height: 100%;

          &.active {
            color: ${({theme}) => theme.effects.hoverLight(theme.colors.white)};
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

    a {
      svg {
        color: ${({theme}) => theme.colors.white};
      }

      .badge {
        background:  ${({theme}) => theme.colors.black};
      }
    }
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
    background-color: ${({theme}) => theme.colors.bodyBg};
    top: initial;
    bottom: 0;

    &.scroll-header {
      .nav-logo {
        a {
          color: ${({theme}) => theme.colors.text};
        }
      }

      .nav-menu {
        ul {
          .nav-link {
            color: ${({theme}) => theme.colors.text};

            &.active {
              color: ${({theme}) => theme.colors.main500};
            }
          }
        }
      }

      .btn-container {
        a {
          svg {
            color: ${({theme}) => theme.colors.text};
          }

          .badge {
            background:  ${({theme}) => theme.colors.red500};
          }
        }
      }
    }

    nav {
      .nav-logo {
        a {
          color: ${({theme}) => theme.colors.text};
        }
      }
    }

    .nav-menu {
      ul {
        .nav-link {
          color: ${({theme}) => theme.colors.text};

          &.active {
            color: ${({theme}) => theme.colors.title};
          }
        }
      }
    }

    .btn-container {
      a {
        svg {
          color: ${({theme}) => theme.colors.text};
        }

        .badge {
          background:  ${({theme}) => theme.colors.red500};
        }
      }
    }
    

    nav {
      height: 3.5rem;

      .nav-logo {
        a {
          font-size: 1rem;
        }
      }

      .nav-menu {
        position: fixed;
        bottom: 3.5rem;
        right: -100%;
        width: 100%;
        background-color: ${({theme}) => theme.colors.bodyBg};
        box-shadow: ${({theme}) => theme.effects.shadowTop};
        border-radius: 1.5rem 1.5rem 0 0;
        transition: all 2s;
        padding-top: 1rem;

        &.show {
          right: 0;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding-bottom: 8rem;

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
`;