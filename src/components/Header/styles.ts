import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 10px;
`;

export const Logo = styled.Text`
  color: ${colors.black};

  font-size: 30px;
  margin-left: 25px;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 30px;
`;

export const Messages = styled.View`
  background: ${colors.red};
  width: 15px;
  height: 15px;
  border-radius: 10px;

  position: absolute;
  top: -7px;
  right: -4px;
`;

export const NumberMessage = styled.Text`
  color: ${colors.black};
  top: -1px;
  right: -4px;
  font-weight: bold;
  font-size: 12px;
`;
