import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/Routes/PrivateRoute';
import './App.css';

const { Content } = Layout;

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isAuthenticated && <Navbar />}
      <Content>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <div style={{ padding: '20px' }}>
                <h1>Olá, mundo!</h1>
                <br /><br />
              </div>
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;