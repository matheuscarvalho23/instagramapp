import React from 'react';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';

import {
  List,
  FeedContainer,
  FeedHeader,
  FeedProfile,
  FeedUser,
  FeedRow,
  FeedBorderProfile,
  FeedRowButton,
  FeedPhoto,
  FeedFooter,
  FeedButton,
  FeedComments,
  FeedBio,
  FeedEnd,
  FeedTime,
  FeedTradution,
} from './styles';

import profilePhoto from '../../assets/profile.jpg';

const Feed: React.FC = () => {
  const FeedItem: React.FC = () => (
    <FeedContainer>
      <FeedHeader>
        <FeedRow>
          <FeedBorderProfile>
            <FeedProfile
              source={profilePhoto}
            />
          </FeedBorderProfile>
          <FeedUser>neymarjr</FeedUser>
        </FeedRow>

        <FeedRowButton>
          <FeedButton>
            <Feather
              name="more-vertical"
              size={24}
              color={colors.black}
            />
          </FeedButton>
        </FeedRowButton>
      </FeedHeader>

      <FeedPhoto
        source={profilePhoto}
      />
      <FeedFooter>
        <FeedRow>
          <FeedButton>
            <Feather
              name="heart"
              size={26}
              color={colors.black}
            />
          </FeedButton>
          <FeedButton>
            <Feather
              name="message-circle"
              size={26}
              color={colors.black}
            />
          </FeedButton>
          <FeedButton>
            <Feather
              name="send"
              size={26}
              color={colors.black}
            />
          </FeedButton>
        </FeedRow>

        <FeedRowButton>
          <FeedButton>
            <Feather
              name="bookmark"
              size={26}
              color={colors.black}
            />
          </FeedButton>
        </FeedRowButton>
      </FeedFooter>

      <FeedComments>
        <FeedUser>neymarjr</FeedUser>
        <FeedBio>Hala Paris</FeedBio>
      </FeedComments>

      <FeedEnd>
        <FeedTime>há 2 segundos</FeedTime>
        <FeedTradution>Ver tradução</FeedTradution>
      </FeedEnd>
    </FeedContainer>
  );

  return (
    <List>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </List>
  );
};

export default Feed;
