import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import * as auth from '../services/auth';
import api from '../services/api';
import { useCallback } from 'react';

interface UserData {
  username: string;
  password: string;
}

interface LoginCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  logged: boolean;
  user: UserData | null;
  loading: boolean;
  login(credentials: LoginCredencials): Promise<void>;
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

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });

    console.log(response);

    // setUser(response.user);

    // api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    // await AsyncStorage.setItem('@RnAuth:user', JSON.stringify(response.user));
    // await AsyncStorage.setItem('@RnAuth:token', response.token);

  }, []);

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