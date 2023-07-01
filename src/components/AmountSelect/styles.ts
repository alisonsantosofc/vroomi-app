import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 1rem;
  }

  > button {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: none;
    color: var(--white);
    cursor: pointer;
    border-radius: 0.25rem;

    &:first-child {
      background: var(--red-500);
    }

    &:last-child {
      background: var(--green-500);
    }

    &:disabled {
      filter: brightness(0.5);
      cursor: auto;
    }
  }
`;
