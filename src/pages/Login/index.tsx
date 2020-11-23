import React from 'react';
import { Text } from 'react-native'

import {
  Container,
  Content,
  Logo,
  ForgotLogin,
  BreakContent,
  BreakText,
  Button,
  ButtonText,
} from './styles';
import Header from '../../components/HeaderLogin';
import Input from '../../components/Input';
import ButtonComponent from '../../components/Button';
import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
  const { login } = useAuth();

  async function handleSubmit() {
    login();
  }

  return (
    <Container>
      <Header />

      <Content>
        <Logo>Instagram</Logo>
        <Input
          placeholder="Número de telefone, email ou nome de usuário"
        />
        <Input
          placeholder="Senha"
        />
        <ButtonComponent>
          Entrar
        </ButtonComponent>
        <ForgotLogin>Esqueceu seus dados de login?</ForgotLogin>

        <BreakContent>
          <BreakText>OU</BreakText>
        </BreakContent>

        <Button onPress={handleSubmit}>
          <ButtonText>Entrar como @omatheuscarvalho_</ButtonText>
        </Button>
      </Content>

    </Container>
  );
};

export default Login;
