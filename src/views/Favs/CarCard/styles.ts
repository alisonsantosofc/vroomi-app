import styled from 'styled-components';

export const StyledCarCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  background: ${({theme}) => theme.colors.containerBg};
  box-shadow: ${({theme}) => theme.effects.shadowAround};
  margin-top: 4rem;
  transition: .3s;

  img {
    position: absolute;
    top: -4rem;
  }

  .brand-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4.5rem 0 1rem;
    color: ${({theme}) => theme.colors.title};

    p {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1.8rem;
      }
    }  

    > i {
      position: absolute;
      right: 0;
      top: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${({theme}) => theme.colors.text};
    }
    
    > span {
      position: absolute;
      display: inline-flex;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.9rem;
      background: ${({theme}) => theme.colors.text};
      right: 0;
      bottom: -1rem;
      color: ${({theme}) => theme.colors.titleContrast};
    }
  }

  .btn-container {
    margin: 1rem;
    width: 100%;
    display: flex;
  }

  // Breakpoints
  /* For medium devices */
  @media screen and (max-width: 768px) {
    margin-top: 6rem;

    img {
      width: 25rem;
      top: -6rem;
    }
  }
`;
