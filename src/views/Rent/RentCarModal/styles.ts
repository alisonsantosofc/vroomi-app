import styled from 'styled-components';

export const StyledRentCarModal = styled.div`
  width: 576px;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .btn-close {
    position: absolute;
    top: -1rem;
    right: -1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .brand-container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    h2 {
      font-size: 3.5rem;
      font-weight: 600;
    }

    span {
      z-index: 2;
      font-size: 1.5rem;
    }
  }

  .info-container {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      font-size: 1.2rem;
      line-height: 1.6rem;

      span {
        font-weight: 600;
      }
    }

    .limit-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  button {
    margin-top: 2rem;
    background: ${({theme}) => theme.colors.main500};
    justify-content: center;
  }

  // Breakpoints
  @media (max-width: 998px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    .info-container {
      p {
        font-size: 1rem;
        line-height: 1.4rem;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .info-container {
      grid-template-columns: 1fr;
      gap: 0.5rem;
      

      .price-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }

      .limit-content {
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr;
      }

      p {
        font-size: 1rem;
        line-height: 1.4rem;
      }
    }
  }
`;
