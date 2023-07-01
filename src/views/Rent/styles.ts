import styled from 'styled-components';

export const Container = styled.main`
  width: 1144px;
  max-width: 100vw;
  min-height: calc(100vh - 64px);
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;

  > div {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2rem;
    }

    > form {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      position: relative;

      label {
        font-size: 1.1rem;
        font-style: italic;
        display: flex;
        flex-direction: column;

        & + label {
          margin-left: 2rem;
        }

        &:nth-child(1) {
          width: 70px;
        }

        &:nth-child(2) {
          max-width: 140px;
        }

        input {
          margin-top: 0.5rem;
        }
      }

      svg {
        padding: 0.5rem;
        font-size: 3rem;
        margin-top: 1.5rem;
        margin-left: 2rem;
        border-radius: 100%;
        cursor: pointer;
        transition: all ease-in 0.2s;
        background: var(--main-color);

        &:hover {
          background: var(--gray-700);
          box-shadow: 0px -1px 10px 3px rgba(0, 0, 0, 0.28);
        }
      }
    }

    @media (max-width: 778px) {
      h2 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 496px) {
      h2 {
        font-size: 1.2rem;
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
      color: var(--main-color);
      font-size: 1.8rem;
      font-weight: 700;
    }

    @media (max-width: 496px) {
      font-size: 1rem;

      span {
      font-size: 1.5rem;

    }
    }
  }

  .cars-list-container {
    width: 100%;

    ul {
      margin-top: 1rem;
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;

      @media (max-width: 1144px) {
        width: calc(100vw - 5rem);
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 778px) {
        width: calc(100vw - 3rem);
        grid-template-columns: 1fr;

        li {
          img {
            width: 400px;
            height: 200px;
          }
        }
      }

      @media (max-width: 496px) {
        li {
          img {
            width: 300px;
            height: 150px;
          }
        }
      }
    }
  }

  .loader-content {
    width: 100%;
    min-height: 60vh;
  }

  @media (max-width: 1144px) {
    padding: 60px 2rem 0 2rem;
  }

  @media (max-width: 778px) {
    padding: 60px 1rem 0 1rem;
  }
`;
