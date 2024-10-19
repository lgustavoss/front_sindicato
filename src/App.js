import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProviderComponent } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import UserList from './components/UserList/UserList';
import PrivateRoute from './components/Routes/PrivateRoute'; // Importe o PrivateRoute

const App = () => {
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
                <Navbar />
                <UserList />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/" 
            element={
              <PrivateRoute>
                <Navbar />
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
