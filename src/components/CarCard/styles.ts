import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  background: var(--gray-700);

  .info-container {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      span {
        font-weight: 600;
      }
    }
  }

  .rent-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1.8rem;
      }
    }

    button {
      background: var(--red-500);
    }
  }
`;
