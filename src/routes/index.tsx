import React from 'react';
import { useAuth } from '../contexts/auth';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { logged } = useAuth();

  return (logged) ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;