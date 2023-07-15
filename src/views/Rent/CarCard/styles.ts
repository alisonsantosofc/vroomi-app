import styled from 'styled-components';

export const StyledCarCard = styled.li<{disabled: boolean}>`
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
  opacity: ${({disabled}) => disabled && '0.5'};

  img {
    position: absolute;
    top: -4rem;
  }

  .brand-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    color: ${({theme}) => theme.colors.title};

    p {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1.8rem;
      }
    }    
  }

  .info-container {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    p {
      font-size: 0.9rem;
      span {
        font-weight: 600;
      }
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
