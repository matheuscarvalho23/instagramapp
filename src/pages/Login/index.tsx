import React, { useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import * as Yup from 'yup';

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
import getValidationsErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();
  const formRef   = useRef<FormHandles>(null);

  const handleLogin = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        username: Yup.string().required('E-mail is required'),
        password: Yup.string().required('Password is required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      login({
        username: data.username,
        password: data.password
      });
    } catch (err) {
      console.log(err)
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);

        formRef.current?.setErrors(errors);

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao realizar o login, cheque as credenciais'
        );

        return;
      }
    }
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Logo>Instagram</Logo>

        <Form ref={formRef} onSubmit={handleLogin}>
          <Input
            name="username"
            placeholder="Usuário"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input
            name="password"
            placeholder="Senha"
            isPass
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
