import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.containerBackground};
  width: 30vw;
  min-width: 500px;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  position: relative; /* Para o posicionamento absoluto do botão funcionar */

  h1 {
    font-family: ${({ theme }) => theme.fonts.titleFont};
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.neonGlow};
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.neonGlow};
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  input {
    width: 70%;
    padding: 0.8rem;
    margin: 0.8rem 0;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.neonGlow};
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.neonGlow};
    }
  }

  button {
    width: 70%;
    padding: 0.8rem;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.buttonText};
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 15px ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    input, button {
      width: 80%;
    }
  }
`;

export const FooterContainer = styled.div`
  position: absolute; /* Posiciona no rodapé */
  bottom: 20px; /* Distância do rodapé */
  right: 20px; /* Distância da direita */
  display: flex;
  align-items: center;
  justify-content: center;
`;
