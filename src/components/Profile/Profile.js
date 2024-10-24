import React from 'react';
import { Card } from 'antd';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <Card title="Perfil do Usuário" className="profile-card">
        <p><strong>Nome:</strong> {user?.first_name} {user?.last_name}</p>
        <p><strong>Login:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </Card>
    </div>
  );
};

export default Profile;