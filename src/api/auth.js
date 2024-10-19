import axios from 'axios';
import { API_URL } from './config';

// Função para fazer login
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/token/`, {
        username,
        password,
        });

        console.log('Resposta do servidor:', response.data); // Log pra inspecionar a resposta do servidor

        // Verifica se 'response.data' contém os tokens de acesso e refresh
        if (response.data.access && response.data.refresh) {
            // Armazena os tokens no localStorage
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            return response.data;
        } else {
            // Lança um erro caso os tokens não estejam presentes
            throw new Error('Tokens não recebidos corretamente');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
        throw error;
        }
    };

// Função para validar o token de acesso
export const validateToken = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/token/verify/`, {
        token: token,
        });
        return response.status === 200; // Retorna true se o status for 200
    } catch (error) {
        console.error('Erro ao validar o token:', error.response ? error.response.data : error.message);
        return false;
    }
};

// Função para renovar o token de acesso
export const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
        return null;
    }

    try {
        const response = await axios.post(`${API_URL}/token/refresh/`, {
        refresh: refreshToken,
        });
        return response.data.access;
    } catch (error) {
        console.error('Erro ao renovar o token:', error.response ? error.response.data : error.message);
        return null;
    }
};