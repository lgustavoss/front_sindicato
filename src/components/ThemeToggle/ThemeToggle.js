import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Formato circular */
  width: 40px; /* Largura e altura iguais */
  height: 40px;
  color: ${({ theme }) => theme.colors.buttonText};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.secondary : theme.colors.hoverLight}; /* Diferentes cores ao passar o mouse no tema claro ou escuro */
    transform: scale(1.1); /* Pequeno aumento ao passar o mouse */
  }

  &:focus {
    outline: none; /* Remove a borda de foco padrão */
  }

  svg {
    font-size: 1.5rem; /* Tamanho do ícone */
  }
`;

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton isDarkTheme={isDarkTheme} onClick={toggleTheme}>
      {isDarkTheme ? <FaSun /> : <FaMoon />} {/* Ícones de Sol/Lua */}
    </ToggleButton>
  );
};

export default ThemeToggle;
