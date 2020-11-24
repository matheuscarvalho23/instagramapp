import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ?
  Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
  flex: 1;
  background: ${colors.primary};
  padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.View`
  padding-left: 10px;
`;

export const Main = styled.View``;

export const Line = styled.View`
  border-top-color: ${colors.tag};
  border-top-width: 1px;
`;
