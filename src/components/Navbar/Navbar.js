import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Avatar, Space } from 'antd';
import { LogoutOutlined, UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';
import ChangePassword from '../ChangePassword/ChangePassword';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const { logout, user } = useAuth();
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <a href="/profile">
          <UserOutlined />
          Perfil
        </a>
      </Menu.Item>
      <Menu.Item key="change-password" onClick={() => setChangePasswordModalVisible(true)}>
        <KeyOutlined />
        Trocar Senha
      </Menu.Item>
      <Menu.Item key="logout" onClick={logout}>
        <LogoutOutlined />
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header className="navbar">
        <div className="logo">
          <a href="/">
            <img
              className="logo-img"
              src="/logo.svg"
              alt="Duplex Soft"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
            />
            <h1 className="logo-text">Duplex Soft</h1>
          </a>
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="right-content">
          <Space size="middle">
            <Dropdown overlay={menu} trigger={['click']}>
              <div className="user-dropdown">
                <Avatar src="/avatar.png" />
                <span className="username">{user ? user.first_name : 'Usuário'}</span>
              </div>
            </Dropdown>
          </Space>
        </div>
      </Header>
      <ChangePassword
        visible={isChangePasswordModalVisible}
        onClose={() => setChangePasswordModalVisible(false)}
      />
    </>
  );
};

export default Navbar;