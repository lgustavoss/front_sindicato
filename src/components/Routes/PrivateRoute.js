import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { validateToken, refreshToken } from '../../api/auth'; // Importe a função para validar token

const PrivateRoute = ({ children }) => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [loading, setLoading] = useState(true); // Para controlar o estado de carregamento

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setLoading(false); // Se não houver token, finalize o carregamento
        return;
      }

      try {
        const valid = await validateToken(token); // Chama a função para validar o token no backend
        if (!valid) {
          const newToken = await refreshToken(); // Tenta obter um novo token, se possível
          if (newToken) {
            localStorage.setItem('access_token', newToken);
            setIsValidToken(true);
          } else {
            setIsValidToken(false); // Token inválido ou não foi possível renovar
          }
        } else {
          setIsValidToken(true); // Token é válido
        }
      } catch (error) {
        console.error('Erro ao validar o token', error);
        setIsValidToken(false);
      } finally {
        setLoading(false); // Finaliza o carregamento após a verificação
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return <div>Carregando...</div>; // Exibe uma tela de carregamento enquanto valida
  }

  return isValidToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
