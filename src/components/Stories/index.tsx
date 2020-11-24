import React from 'react';

import {
  List,
  StoriesContainer,
  StoriesImage,
  StorieUser,
} from './styles';

import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const Stories: React.FC = () => {
  const StoriesItem: React.FC<ItemProps> = ({ item }) => (
    <StoriesContainer>
      <StoriesImage source={item.source} />
      <StorieUser>{item.name}</StorieUser>
    </StoriesContainer>
  );

  return (
    <List>
      {data.map(item => (
        <StoriesItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default Stories;
