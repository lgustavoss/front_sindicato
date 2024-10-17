import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Garante que o padding não aumente o tamanho dos elementos */
  }

  body, html {
    width: 100%;
    height: 100%;
    overflow: hidden; /* Remove a barra de rolagem */
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.titleFont};
    color: ${({ theme }) => theme.colors.text};
  }

  .container {
    background-color: ${({ theme }) => theme.colors.containerBackground};
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 600px;
  }
`;

export default GlobalStyles;