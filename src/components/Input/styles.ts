import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: ${colors.darkgray};
  border-radius: 4px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #FFF;
  font-size: 14px;
`;
