import React from 'react';

import {
  Container,
  TextInput
} from './styles';

const Input: React.FC = ({ ...rest }) => {
  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#d9d9d9"
        {...rest }
      />
    </Container>
  );
};

export default Input;
