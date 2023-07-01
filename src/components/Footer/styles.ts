import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 34px;
  margin-top: -1rem;

  div {
    max-width: 1144px;
    margin: 0 auto;
  }

  @media (max-width: 1144px) {
    padding: 0 2rem;
  }

  @media (max-width: 778px) {
    padding: 0 1rem;
  }

  @media (max-width: 596px) {
    div {
      display: flex;
      justify-content: center;

      p {
        font-size: 0.8rem;
        width: 80%;
        text-align: center;
      }
    }
  }
`;
