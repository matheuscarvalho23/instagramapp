import React from 'react';
import { Button } from 'react-native';

import { Container } from './styles';
import { useAuth } from '../../contexts/auth';

const Profile: React.FC = () => {
  const { logout } = useAuth();

  async function handleLogout() {
    logout();
  }

  return (
    <Container>
      <Button title="Sair" onPress={handleLogout} />
    </Container>
  );
};

export default Profile;
