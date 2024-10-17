import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinha os itens à direita */
  align-items: center; /* Alinha verticalmente no centro */
  padding: 1rem; /* Adiciona espaço ao redor da Navbar */
  background-color: ${({ theme }) => theme.colors.secondary}; /* Cor de fundo da Navbar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidade */
`;

export const WelcomeMessage = styled.span`
  font-size: 1rem; /* Tamanho da fonte do texto de boas-vindas */
  color: ${({ theme }) => theme.colors.text}; /* Cor do texto utilizando o tema */
  margin-right: 1rem; /* Espaço entre a mensagem e o botão */
  font-family: ${({ theme }) => theme.fonts.bodyFont}; /* Fonte do texto de boas-vindas */
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground}; /* Cor de fundo do botão de sair */
  color: ${({ theme }) => theme.colors.buttonText}; /* Cor do texto do botão */
  border: none; /* Remove a borda padrão */
  border-radius: 5px; /* Arredonda os cantos do botão */
  padding: 0.5rem 1rem; /* Espaçamento interno do botão */
  cursor: pointer; /* Cursor pointer para o botão */
  margin-right: 1rem; /* Espaçamento entre o botão de logout e o ThemeToggle */
  transition: background-color 0.3s; /* Animação suave para a mudança de cor */

  &:hover {
    background-color: ${({ theme }) => theme.colors.neonGlow}; /* Cor do botão ao passar o mouse */
  }
`;
