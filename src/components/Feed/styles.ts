import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 24px;
`;

export const FeedContainer = styled.View``;

export const FeedHeader = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 10px 0;
`;

export const FeedBorderProfile = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border-style: solid;
  border-color: ${colors.insta};
  border-width: 2px;
`;

export const FeedProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const FeedUser = styled.Text`
  color: ${colors.black};
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const FeedRow = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const FeedRowButton = styled.View``;

export const FeedPhoto = styled.Image`
  width: 100%;
  height: 400px;
`;

export const FeedFooter = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FeedButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const FeedComments = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FeedBio = styled.Text`
  color: ${colors.black};
  margin-left: 7px;
`;

export const FeedEnd = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 25px;
`;

export const FeedTime = styled.Text`
  color: ${colors.gray};
  font-size: 12px;
`;

export const FeedTradution = styled.Text`
  color: ${colors.black};
  margin-left: 5px;
  font-weight: bold;
  font-size: 12px;
`;

