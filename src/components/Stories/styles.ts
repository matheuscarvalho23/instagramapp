import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;

export const StoriesContainer = styled.TouchableOpacity`
  margin-top: 10px;
  margin-right: 15px;
  align-items: center;
`;

export const StorieBorder = styled.View`
  padding: 2px;
  width: 75px;
  height: 75px;
  border-radius: 35.5px;
  border-style: solid;
  border-color: ${colors.insta};
  border-width: 3px;
`;

export const StoriesImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 32.5px;
`;

export const StorieUser = styled.Text`
  color: ${colors.black};
`;

