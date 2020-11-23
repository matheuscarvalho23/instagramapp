import React, { useRef, useCallback } from 'react';

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
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();
  const formRef   = useRef<FormHandles>(null);

  const handleLogin = useCallback(async (data: SignInFormData) => {
    login({
      email: data.email,
      password: data.password
    });
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Logo>Instagram</Logo>

        <Form ref={formRef} onSubmit={handleLogin}>
          <Input
            name="email"
            placeholder="Número de telefone, email ou nome de usuário"
          />
          <Input
            name="password"
            placeholder="Senha"
          />
          <Button onPress={() => {
            formRef.current?.submitForm();
          }}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Form>
        <ForgotLogin>Esqueceu seus dados de login?</ForgotLogin>

        <BreakContent>
          <BreakText>OU</BreakText>
        </BreakContent>

        <Button onPress={() => {
          formRef.current?.submitForm();
        }}>
          <ButtonText>Entrar como @omatheuscarvalho_</ButtonText>
        </Button>
      </Content>

    </Container>
  );
};

export default Login;
