import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.primary};

  align-items: center;
  justify-content: center;

  padding-top: 14px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.gray};
`;
