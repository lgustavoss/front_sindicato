import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const rememberedUsername = localStorage.getItem('remembered_username');
    if (rememberedUsername) {
      setUsername(rememberedUsername);
      setRemember(true);
    }
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await login(values.username, values.password);
      message.success('Login realizado com sucesso!');
      if (values.remember) {
        localStorage.setItem('remembered_username', values.username);
      } else {
        localStorage.removeItem('remembered_username');
      }
      navigate('/');
    } catch (error) {
      message.error('Usuário ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <span className="login-logo">
            <img alt="logo" src="/logo.svg" />
          </span>
          <span className="login-title">Bem-vindo ao sistema</span>
          <span className="login-welcome">Sintramacon-DF</span>
        </div>
        <Form
          name="login"
          className="login-form"
          initialValues={{ remember, username }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Por favor, insira seu usuário!' }]}
          >
            <Input placeholder="Usuário" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Lembre-me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default Login;