import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'; // Importa o ThemeProvider do styled-components
import { lightTheme, darkTheme } from '../styles/theme'; // Importa os temas

const ThemeContext = createContext();

const ThemeProviderComponent = ({ children }) => {
  // Estado para armazenar se o tema é escuro
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Recupera o tema do localStorage ao inicializar o estado
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false; // Se estiver armazenado, define o estado
  });

  // Efeito para armazenar o tema no localStorage sempre que isDarkTheme mudar
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // Define o tema baseado no estado
  const theme = isDarkTheme ? darkTheme : lightTheme;

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
