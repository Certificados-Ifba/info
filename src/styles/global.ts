import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  @media (max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
    .hide-md-down {
      display: none !important;
    }
  }

  body {
    background-color: #FAFAFC;
    color: #1C1C28;
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Inter', sans-serif;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
