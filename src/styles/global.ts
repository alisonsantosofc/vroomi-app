import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*=== CSS Variables ===*/
  :root {
    --font-family: "Montserrat", sans-serif;

    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  /*=== Base ===*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  button,
  input,
  textarea {
    font-family: var(--font-family);
    font-size: 1.1rem;
  }

  body {
    background-color: ${({theme}) => theme.colors.bodyBg};
    color: ${({theme}) => theme.colors.text};
  }

  h1 {
    color: ${({theme}) => theme.colors.title};
    font-weight: 600;
  }

  h2, h3 {
    color: ${({theme}) => theme.colors.title};
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  a {
    color: ${({theme}) => theme.colors.text};
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /*=== Utility CSS Classes ===*/
  .section {
    padding: 6rem 0 2rem;
  }

  .section-title {
    font-size: 2.25rem;
    color: ${({theme}) => theme.colors.title};
    font-weight: 600;
  }

  .section-subtitle {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 4rem;
  }

  .section-title,
  .section-subtitle {
    text-align: center;
  }

  /*=== Layout ===*/
  .container {
    max-width: 968px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .react-modal-overlay {
    z-index: 99;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
  }

  .react-modal-content {
    background: ${props => props.theme.colors.containerBg};
    padding: 2rem;
    position: relative;
    border-radius: 4px;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    @media (max-width: 998px) {
      width: 100%;
      margin: 1.5rem;
    }
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .container {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    body {
      margin: 0 0 3rem 0;
    }
    .section {
      padding: 2rem 0 2rem;
    }
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .container {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;
