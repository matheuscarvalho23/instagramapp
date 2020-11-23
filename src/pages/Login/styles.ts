import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ?
  Constants.statusBarHeight : 0;

export const Container = styled.View`
  background: ${colors.primary};
  flex: 1;

  padding: 0 30px;
  padding-top: ${statusBarHeight + 'px'};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Text`
  color: ${colors.black};
  font-size: 50px;
  margin-bottom: 10px;
`;

export const ForgotLogin = styled.Text`
  color: ${colors.black};
  margin-top: 10px;
  font-weight: bold;
`;

export const BreakContent = styled.View`
  justify-content: space-between;
`;

export const BreakText = styled.Text`
  color: ${colors.gray};
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Button = styled.TouchableOpacity`
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
