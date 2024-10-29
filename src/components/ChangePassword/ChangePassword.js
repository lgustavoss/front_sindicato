import React, { useState } from 'react';
import { Form, Input, Button, message, Modal } from 'antd';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import './ChangePassword.css';

const ChangePassword = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/usuario/change-password/`, {
        username: user.username,
        old_password: values.old_password,
        new_password: values.new_password,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      message.success('Senha alterada com sucesso!');
      form.resetFields();
      onClose();
    } catch (error) {
      message.error('Erro ao trocar a senha.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Trocar Senha"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name="change-password"
        className="change-password-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="old_password"
          rules={[{ required: true, message: 'Por favor, insira sua senha atual!' }]}
        >
          <Input.Password placeholder="Senha Atual" />
        </Form.Item>
        <Form.Item
          name="new_password"
          rules={[{ required: true, message: 'Por favor, insira sua nova senha!' }]}
        >
          <Input.Password placeholder="Nova Senha" />
        </Form.Item>
        <Form.Item
          name="confirm_password"
          dependencies={['new_password']}
          hasFeedback
          rules={[
            { required: true, message: 'Por favor, confirme sua nova senha!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('new_password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('As senhas não coincidem!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirme a Nova Senha" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="change-password-form-button" loading={loading}>
            Trocar Senha
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ChangePassword;