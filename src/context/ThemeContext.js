import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components'; // Importa o ThemeProvider do styled-components
import { lightTheme, darkTheme } from '../styles/theme'; // Importa os temas

const ThemeContext = createContext();

const ThemeProviderComponent = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme; // Define o tema baseado no estado

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={theme}> {/* Envolve os componentes filhos com o ThemeProvider */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Exporta o contexto e o provedor
export { ThemeContext, ThemeProviderComponent };
