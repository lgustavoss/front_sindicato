import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer, WelcomeMessage, LogoutButton } from './Navbar.styles';
import ThemeToggle from '../ThemeToggle/ThemeToggle'; // Importe o ThemeToggle

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover os tokens do localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    
    // Redirecionar para a página de login
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <WelcomeMessage>Seja bem-vindo, {user}. Não é você?</WelcomeMessage>
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      <ThemeToggle /> {/* Adicione o ThemeToggle aqui */}
    </NavbarContainer>
  );
};

export default Navbar;