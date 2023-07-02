import styled from 'styled-components';

export const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  .dashboard-section {
    margin-top: 2rem;
    .dashboard-slogan {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 3rem;
        max-width: 80%;
      }

      p {
        max-width: 60%;
        margin-top: 1rem;
        font-size: 1.2rem;
        font-weight: 400;

        span {
          color: ${({theme}) => theme.colors.main500};
          font-weight: 500;
        }
      }
    }
  }

  .btn-container {
    display: flex;
    margin-top: 2rem;
    
    button {
      height: 3rem;
      font-size: 1rem;

      &:first-child {
        background: ${({theme}) => theme.colors.main500};
        margin-right: 1rem;

        &:hover {
          background: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
        }
      }

      &:last-child {
        background: ${({theme}) => theme.colors.title};

        &:hover {
          background: ${({theme}) => theme.effects.hoverLight(theme.colors.title)};
        }
      }
    }
  }

  .dashboard-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 0 0;
  }

  .count-container {
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.colors.containerBg};
    padding: 1.25rem 1.75rem 1.25rem 1.5rem;
    border-radius: 0.25rem;
    box-shadow: 0px -1px 10px 3px rgba(0, 0, 0, 0.18);

    svg {
      padding: 0.25rem;
      font-size: 2.25rem;
      border-radius: 50%;
      color: ${({theme}) => theme.colors.titleContrast};
      background: ${({theme}) => theme.colors.green500};
    }

    p {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      font-size: 1.2rem;

      span {
        &:first-child {
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }
  }

  .dashboard-img {
    margin-top: 1rem;

    img {
      width: 768px;
    }
  }

  // Breakpoints
  /* For medium devices */
  @media screen and (max-width: 768px) {
    .dashboard-section {

      .dashboard-slogan {
        h1 {
          font-size: 2.5rem;
          max-width: 100%;
        }

        p {
          font-size: 1rem;
          max-width: 80%;
        }
      }
    }

    .dashboard-info {
      flex-direction: column-reverse;
      margin: 3rem 0 0;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 576px) {
    .btn-container {
      flex-direction: column;
      gap: 1rem;

      button {
        justify-content: center;

        &:first-child {
          margin: 0;
        }
      }
    }
  }
`;
