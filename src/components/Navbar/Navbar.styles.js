import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${({ theme }) => theme.colors.containerBackground}; /* Usar fundo do container */
  position: relative; /* Contexto de posição para o dropdown */
`;

export const UserMenu = styled.div`
  cursor: pointer;
  padding: 10px;
  background: transparent; /* Fundo transparente para combinar com a navbar */
  color: ${({ theme }) => theme.colors.text}; /* Usar a cor do texto padrão */
  border-radius: 5px;
  transition: background 0.3s, color 0.3s; /* Transição suave */

  &:hover {
    background: ${({ theme }) => theme.colors.primary}; /* Cor de fundo ao passar o mouse */
    color: ${({ theme }) => theme.colors.secondary}; /* Cor do texto ao passar o mouse */
  }
`;

export const UserDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.containerBackground}; /* Usar fundo do container */
  border: 1px solid ${({ theme }) => theme.colors.primary}; /* Borda com cor primária */
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.text}; /* Usar cor do texto padrão */
    text-align: left; 
    cursor: pointer;
    transition: background 0.3s, color 0.3s; 

    &:hover {
      background: ${({ theme }) => theme.colors.hoverBackground}; /* Usar cor de hover do tema */
      color: ${({ theme }) => theme.colors.selectedText}; /* Cor do texto ao passar o mouse */
    }
  }
`;

export const UserName = styled.div`
  padding: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text}; /* Usar a cor do texto padrão */
`;
