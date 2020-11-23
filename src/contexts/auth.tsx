import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import * as auth from '../services/auth';
import api from '../services/api';

interface UserData {
  usename: string;
  password: string;
}

interface AuthContextData {
  logged: boolean;
  user: UserData | null;
  loading: boolean;
  login(): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser]       = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser  = await AsyncStorage.getItem('@RnAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RnAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  async function login() {
    const response = await auth.login();

    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RnAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RnAuth:token', response.token);
  }

  function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{logged: !!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}