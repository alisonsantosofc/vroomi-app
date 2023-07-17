import styled from 'styled-components';

export const StyledRentalCard = styled.li`
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

  img {
    position: absolute;
    top: 1.5rem;
    left: -8rem;
  }

  .rent-data-container {
    width: 100%;
  }

  .brand-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.colors.title};
    padding-right: 3rem;

    p {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 2.5rem;
      }
    }   
    
    svg {
      width: 4rem;
    }


    i {
      position: absolute;
      font-size: 2rem;
      color: ${({theme}) => theme.colors.text};
      right: 1rem;
      top: 2rem;
      cursor: pointer;
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
    padding: 3rem 2rem 2rem 2rem;
    margin-top: 8rem;

    .rent-data-container {
      width: 100%;
    }

    img {
      width: 380px;
      top: -7rem;
      left: inherit;
    }

    .brand-container {
      i {
        top: 4rem;
      }
    }
  }
  /* For medium devices */
  @media screen and (max-width: 768px) {
    padding: 4rem 2rem 2rem 2rem;

    .brand-container {
      padding-right: 2.5rem;

      i {
        top: 5rem;
      }
    }

    .info-container {
      grid-template-columns: 1fr;
      gap: 0.5rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .brand-container {
      padding-right: 2rem;

      p {
        strong {
          font-size: 2rem;
        }
      }

      svg {
        width: 3rem;
      }

      i {
        top: 5.5rem;
        font-size: 1.5rem;
      }
    }
  }
  /* For small devices */
  @media screen and (max-width: 380px) {
  }
`;
