import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  position: relative;
  background: var(--gray-700);
  padding: 2rem;

  img {
    max-width: 100%;
    max-heigth: 100%;
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .brand-container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    h2 {
      z-index: 2;
      font-size: 3rem;
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
  }

  button {
    margin-top: 2rem;
    background: var(--main-color);
  }
`;
