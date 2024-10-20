import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProviderComponent } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import UserList from './components/UserList/UserList';
import PrivateRoute from './components/Routes/PrivateRoute'; 

const App = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null; // Verifica se o usuário está no localStorage

  return (
    <ThemeProviderComponent>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/usuario/users/" 
            element={
              <PrivateRoute>
                <Navbar user={user} />  {/* Passa o user recuperado do localStorage */}
                <UserList />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/" 
            element={
              <PrivateRoute>
                <Navbar user={user} />
                <UserList />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  );
};

export default App;
