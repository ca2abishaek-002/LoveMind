import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      const data = response.data;
      const authToken = data.token;
      const userData = {
        userId: data.userId,
        username: data.username,
        displayName: data.displayName,
        onboardingComplete: data.onboardingComplete
      };

      localStorage.setItem('token', authToken);
      localStorage.setItem('user', JSON.stringify(userData));

      setToken(authToken);
      setUser(userData);
      return { success: true, user: userData };
    } catch (error) {
      const errMsg = typeof error.response?.data === 'string'
        ? error.response.data
        : error.response?.data?.error || 'Login failed';
      return { success: false, error: errMsg };
    }
  };

  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const data = response.data;
      const authToken = data.token;
      const userInfo = {
        userId: data.userId,
        username: data.username,
        displayName: data.displayName,
        onboardingComplete: data.onboardingComplete
      };

      localStorage.setItem('token', authToken);
      localStorage.setItem('user', JSON.stringify(userInfo));

      setToken(authToken);
      setUser(userInfo);
      return { success: true, user: userInfo };
    } catch (error) {
      const errMsg = typeof error.response?.data === 'string'
        ? error.response.data
        : error.response?.data?.error || 'Registration failed';
      return { success: false, error: errMsg };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const updateProfile = (updatedUser) => {
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    loading,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
