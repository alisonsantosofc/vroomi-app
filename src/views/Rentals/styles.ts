import styled from 'styled-components';

export const StyledUserFleet = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .title-content {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 576px) {
    .title-content {
      h2 {
        font-size: 1.75rem;
      }
    }
  }
`;
