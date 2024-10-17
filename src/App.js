import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProviderComponent } from './context/ThemeContext'; // Atualiza a importação
import GlobalStyles from './styles/GlobalStyles'; // Importa os estilos globais
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import UserList from './components/UserList/UserList';

// Função para verificar se o usuário está logado
const isAuthenticated = () => {
  return localStorage.getItem('access_token') !== null;
};

// Função para obter o nome do usuário do localStorage
const getUsername = () => {
  return localStorage.getItem('username'); // Retorna o nome do usuário armazenado
};

const App = () => {
  const user = getUsername(); // Obtém o nome do usuário

  return (
    <ThemeProviderComponent> {/* Envolve a aplicação com o ThemeProviderComponent */}
      <GlobalStyles /> {/* Aplica os estilos globais */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Renderize a Navbar se o usuário estiver autenticado */}
          <Route
            path="/usuario/users/"
            element={isAuthenticated() ? (
              <>
                <Navbar user={user} /> {/* Passa o nome do usuário para a Navbar */}
                <UserList />
              </>
            ) : (
              <Navigate to="/login" />
            )}
          />
          <Route 
            path="/" 
            element={isAuthenticated() ? (
              <>
                <Navbar user={user} /> {/* Passa o nome do usuário para a Navbar */}
                <UserList />
              </>
            ) : (
              <Navigate to="/login" />
            )}
          />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  );
};

export default App;
