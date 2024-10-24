import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access_token'));
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            console.log('Enviando dados de login:', { username, password });
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/token/`, {
                username,
                password            });
            console.log('Resposta do servidor:', response.data);
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            setIsAuthenticated(true);
            await fetchUserData();
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            throw error;
        }
    };

    const logout = useCallback(() => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }, []);

    const fetchUserData = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/me/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setUser(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
            logout();
        }
    }, [logout]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchUserData();
        }
    }, [isAuthenticated, fetchUserData]);

    useEffect(() => {
        const refreshToken = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/token/refresh/`, {
                    refresh: localStorage.getItem('refresh_token'),
                });
                localStorage.setItem('access_token', response.data.access);
            } catch (error) {
                logout();
            }
        };

        const interval = setInterval(() => {
            if (localStorage.getItem('refresh_token')) {
                refreshToken();
            }
        }, 60 * 1000); // Atualiza o token a cada minuto

        return () => clearInterval(interval);
    }, [logout]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);