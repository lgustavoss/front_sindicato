import React, { useState } from 'react';
import { login } from '../../api/auth'; // Importe a função de login
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { Container, FooterContainer } from './Login.styles'; // Importa o styled component do container e do rodapé
import ThemeToggle from '../ThemeToggle/ThemeToggle'; // Importe o ThemeToggle

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Inicialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      
      console.log('Login bem-sucedido:', response); // Log para garantir que o login foi bem-sucedido
  
      // Armazenar tokens no localStorage
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
  
      // Log dos tokens armazenados
      console.log('Access Token:', localStorage.getItem('access_token'));
      console.log('Refresh Token:', localStorage.getItem('refresh_token'));
  
      // Redirecionar para a página de usuários
      console.log('Redirecionando para /usuario/users/'); // Log de redirecionamento
      navigate('/usuario/users/');
    } catch (error) {
      setError('Nome de usuário ou senha inválidos');
      console.error('Erro ao fazer login:', error.message || error);
    }
  };

  return (
    <Container>
      <h1>Seja bem-vindo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        {error && <p>{error}</p>}
      </form>
      
      {/* Adicionando o ThemeToggle no rodapé */}
      <FooterContainer>
        <ThemeToggle /> {/* Botão de alternância de tema */}
      </FooterContainer>
    </Container>
  );
};

export default Login;
