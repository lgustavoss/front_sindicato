import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  KeyOutlined,
} from '@ant-design/icons';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/Routes/PrivateRoute';
import './App.css';

const { Content, Sider } = Layout;

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isAuthenticated && <Navbar />}
      <Layout>
        {isAuthenticated && (
          <Sider collapsible>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <a href="/">Início</a>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <a href="/profile">Perfil</a>
              </Menu.Item>
              <Menu.Item key="3" icon={<KeyOutlined />}>
                <a href="/change-password">Trocar Senha</a>
              </Menu.Item>
            </Menu>
          </Sider>
        )}
        <Layout>
          <Content style={{ margin: '0 16px' }}>
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
              <Route path="/change-password" element={
                <PrivateRoute>
                  <ChangePassword />
                </PrivateRoute>
              } />
              <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;