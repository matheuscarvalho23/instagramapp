import React from 'react';
import { View, FlatList } from 'react-native'

import {
  Container,
  Wrapper,
  Main,
  Line
} from './styles';

import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Feed from '../../components/Feed';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Dashboard: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_STORIES',
        render: () => <Stories />
      },
      {
        key: 'PAGE_LINE',
        render: () => <Line />
      },
      {
        key: 'PAGE_FEED',
        render: () => <Feed />
      },
    ];

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
