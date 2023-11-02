import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Theme,
  Logo,
  Icons,
  TextArea,
  SearchBar,
  PostCard,
} from '../../designsystem';
import { User } from '../../interfaces';
import Card from './components/Card';

const users = [
  {
    id: '1',
    isFollowed: true,
    name: 'John',
    surname: 'Doe',
    pictureSrc: 'https://placedog.net/600',
    text: 'Loren impsum dolor sit amet',
  },
  {
    id: '5',
    isFollowed: false,
    name: 'Peter',
    surname: 'Jackson',
    pictureSrc: 'https://placedog.net/330',
    text: 'Loren impsum',
  },
  {
    id: '15',
    isFollowed: false,
    name: 'Andrew',
    surname: 'Mckey',
    pictureSrc: 'https://placedog.net/130',
    text: 'Loren impsum dolor sit Loren impsum dolor sit amet amet amet',
  },
];

const postCardUser = {
  name: 'John',
  surname: 'Doe',
  pictureSrc: 'https://placedog.net/420',
  text: 'Adipisicing nulla labore mollit cillum ullamco dolor amet consectetur aliquip aliqua in in exercitation deserunt. Ex anim laboris esse sint ipsum ad. Nulla pariatur eu deserunt cillum incididunt mollit amet Lorem. Qui sint do laboris in ex magna laborum. Eu sint velit non qui id fugiat qui pariatur cillum anim veniam laboris id. Consequat culpa nostrud irure ad sunt ipsum minim aliqua proident non consectetur tempor voluptate.',
  id: '1',
};

type ObjectWithId = { [key: string]: any; id: string };

const renderUser = (user: User) => <PostCard user={user} />;

const PageContainer = styled(Box)`
  padding-inline: 4vw;

  @media (min-width: 50rem) {
    padding-inline: 28.2vw;
  }
`;

const Home = () => (
  <PageContainer
    $mt={Theme.setSpace(16)}
    $display="flex"
    $flexDirection="column"
    $gap={Theme.setSpace(24)}
  >
    <Box
      $display="flex"
      $flexDirection="row"
      $gap={Theme.setSpace(24)}
      $justifyContent="center"
    >
      <Logo color="darkBlue" />
      <Box $flexGrow={1}>
        <SearchBar
          elements={users}
          renderElement={renderUser as (obj: ObjectWithId) => JSX.Element}
          onInputChange={() => console.log('typed')}
        />
      </Box>
      <Icons.UserIcon />
    </Box>

    <TextArea
      onChange={(event) => console.log(event.target.value)}
      placeholder="Click Login and start sending messages..."
      resize="vertical"
    />
    <Card>
      <PostCard user={postCardUser} />
      <PostCard user={postCardUser} />
      <PostCard user={postCardUser} />
      <PostCard user={postCardUser} />
      <PostCard user={postCardUser} />
    </Card>
  </PageContainer>
);

export default Home;
