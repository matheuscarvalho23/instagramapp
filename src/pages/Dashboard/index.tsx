import React from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../contexts/auth';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  async function handleLogout() {
    logout();
  }

  return (
    <Container>
      <Button title="sair" onPress={handleLogout} />
    </Container>
  );
};

export default Dashboard;
