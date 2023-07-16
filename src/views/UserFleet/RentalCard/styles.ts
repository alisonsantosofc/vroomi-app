import styled from 'styled-components';

export const StyledRentalCard = styled.li<{disabled: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 2rem 12rem;
  border-radius: 0.25rem;
  background: ${({theme}) => theme.colors.containerBg};
  box-shadow: ${({theme}) => theme.effects.shadowAround};
  transition: .3s;
  opacity: ${({disabled}) => disabled && '0.5'};

  img {
    position: absolute;
    top: 1.5rem;
    left: -8rem;
  }

  .brand-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.colors.title};

    p {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 2.5rem;
      }
    }   
    
    svg {
      width: 5rem;
    }
  }

  .info-container {
    margin: 1rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    p {
      font-size: 0.9rem;
      span {
        font-weight: 600;
      }
    }
  }

  .btn-container {
    width: 100%;
    display: flex;
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 998px) {
    padding: 1rem 2rem 2rem 2rem;
    margin-top: 4rem;

    .rent-data-container {
      width: 100%;
    }

    img {
      top: -25%;
      left: 30%;
    }
  }
  /* For medium devices */
  @media screen and (max-width: 768px) {
    padding: 4rem 2rem 2rem 2rem;

    img {
      left: 20%;
    }
  }
  @media screen and (max-width: 576px) {

    img {
      left: 10%;
    }
  }
  /* For small devices */
  @media screen and (max-width: 380px) {
  }
`;
