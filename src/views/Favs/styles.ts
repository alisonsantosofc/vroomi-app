import styled from 'styled-components';

export const StyledFavs = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  margin-bottom: 2rem;

  .title-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2rem;
      font-weight: 600;
    }

    .links {
      display: flex;
      gap: 1rem;
    }
  }

  .cars-list{
    width: 100%;

    ul {
      margin-top: 1rem;
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }

  // Breakpoints
  /* For large devices */
  @media screen and (max-width: 998px) {
    .cars-list{
      ul {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  /* For medium devices */
  @media screen and (max-width: 768px) {
    padding-top: 1rem;

    .title-content {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .cars-list{
      ul {
        grid-template-columns: 1fr;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .title-content {
      h2 {
        font-size: 1.75rem;
      }

      .links {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0;

        a {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  /* For small devices */
  @media screen and (max-width: 380px) {
    .rent-find {
      .form-content {
      }

      form {
        grid-template-columns: 1fr;
      }
    }
  }
`;
