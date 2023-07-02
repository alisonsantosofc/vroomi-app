import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  background: ${({theme}) => theme.colors.containerBg};
  box-shadow: ${({theme}) => theme.effects.shadowAround};

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

  .brand-container {
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
  }

  .btn-container {
    margin: 1rem;
    width: 100%;
    display: flex;

    button {
      justify-content: center;
      width: 100%;
      padding: 0.8rem 1rem;
      background: ${({theme}) => theme.colors.main500};
    }
  }
`;
