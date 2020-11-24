import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;

export const StoriesContainer = styled.TouchableOpacity`
  margin-top: 10px;
  margin-right: 20px;
  align-items: center;
`;

export const StoriesImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border: 3px solid ${colors.insta};
`;

export const StorieUser = styled.Text`
  color: ${colors.black};
`;

