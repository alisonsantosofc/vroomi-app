import styled from 'styled-components';

export const StyledHighlight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  .dashboard-section {
    margin-top: 3rem;
    
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
  }

  .dashboard-info {
    display: flex;
    justify-content: flex-end;
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
      margin-top: 6rem;

      .dashboard-slogan {
        h1 {
          font-size: 2rem;
          max-width: 100%;
        }

        p {
          font-size: 1rem;
          max-width: 100%;
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
