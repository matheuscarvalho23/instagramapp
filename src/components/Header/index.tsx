import React from 'react';
import { Feather } from '@expo/vector-icons'

import colors from '../../styles/colors';

import {
  Container,
  Logo,
  RightSide,
  Button,
  Messages,
  NumberMessage
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>Instagram</Logo>

      <RightSide>
        <Button>
          <Feather
            name="plus-square"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name="heart"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name="send"
            size={26}
            color={colors.black}
          />

          <Messages>
            <NumberMessage>5</NumberMessage>
          </Messages>
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
