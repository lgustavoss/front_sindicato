import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../api/config'; // Importando a URL base

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/usuario/users/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        console.log('Resposta da API:', response.data); // Log da resposta
        setUsers(response.data);
      } catch (error) {
        const message = error.response?.data?.detail || 'Erro ao carregar usuários';
        setError(message);
        console.error('Erro:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li> // Ajuste conforme o formato dos dados
        ))}
      </ul>
    </div>
  );
};

export default UserList; // Certifique-se de que esta linha está presente
