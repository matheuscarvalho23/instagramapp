import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  width: 332px;
  height: 50px;
  background: ${colors.blue};
  border-radius: 4px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.black};
  font-weight: bold;
`;
