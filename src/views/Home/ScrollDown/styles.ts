import styled from "styled-components";

export const StyledScrollDown = styled.div`
  .scrolldown-button {
    display: flex;
    align-items: center;

    .mouse-simple {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      svg {
        font-size: 2.5rem;
        margin-bottom: 0.3rem;
        animation: scroll 2s ease infinite;
      }
    }

    .hand-tap {
      display: none;
    }

    p {
      display: flex;
      color: ${({theme}) => theme.colors.text};
      font-weight: 500;
      font-size: 1rem;
      margin-right: .5rem;
      margin-left: .5rem;

      span {
        margin-right: 0.2rem;
      }

      .move {
        display: none;
      }
    }

    .arrow-down {
      font-size: 1.5rem;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }

    30% {
      transform: translateY(0.5rem);
    }
  }

  // Breakpoints
  /* For medium devices */
  @media screen and (max-width: 998px) {
    .scrolldown-button {
      justify-content: flex-end;

      .mouse-simple {
        display: none;
      }

      .hand-tap {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          font-size: 2rem;
          margin-bottom: 0.3rem;
          animation: scroll 2s ease infinite;
        }

        span {
          font-size: 0.9rem;
        }
      }
    }
  }
`;