import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Theme,
  Logo,
  TextArea,
  SearchBar,
  PostCard,
  ProfileCard,
  TabProvider,
} from '../../designsystem';
import { User, Post } from '../../interfaces';
import Card from './components/Card';
import EditProfile from './components/EditProfile';

const usersFromDB: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    pictureSrc: 'https://placedog.net/600',
    email: 'todo',
    password: 'todo',
    followingUsers: [],
    status: 'loren ipsum dolor sit amet',
  },
  {
    id: '2',
    firstName: 'Steve',
    lastName: 'Jones',
    pictureSrc: 'https://placedog.net/700',
    email: 'todo',
    password: 'todo',
    followingUsers: [],
    status: 'loren ipsum dolor sit amet con etiam',
  },
];

const postsFromDB: Post[] = [
  {
    id: '1',
    text: 'Loren impsum isicing nulla labore mollit cillum ullamco dolor amet consectetur aliquip ali dolor sit amet',
    date: new Date(),
    authorId: '1',
  },
  {
    id: '2',
    text: 'Loren impsum isicing nuonsectetur aliquip ali dolor sit amet',
    date: new Date(),
    authorId: '2',
  },
];

const postsWithAuthor = postsFromDB.map((post) => {
  const author = usersFromDB.find((user) => user.id === post.authorId)!;
  return {
    post: { description: post.text, id: post.id },
    user: {
      name: author.firstName!,
      surname: author.lastName!,
      pictureSrc: author.pictureSrc!,
    },
  };
});

type UserForSearchBar = {
  id: string;
  isFollowed: boolean;
  name: string;
  surname: string;
  pictureSrc: string;
  text: string;
};

const usersForSearchBar: UserForSearchBar[] = usersFromDB.map((user) => ({
  id: user.id,
  isFollowed: true,
  name: user.firstName,
  surname: user.lastName,
  pictureSrc: user.pictureSrc,
  text: user.status,
}));

const searchBarRenderElement = (user: UserForSearchBar) => (
  <ProfileCard user={user} />
);

const PageContainer = styled(Box)`
  padding-inline: 4vw;

  @media (min-width: 50rem) {
    padding-inline: 28.2vw;
  }
`;

type UserForProfileCard = {
  isFollowed: boolean;
  name: string;
  surname: string;
  pictureSrc: string;
  text: string;
  id: string;
};

const usersForProfileCard: UserForProfileCard[] = usersFromDB.map((user) => ({
  isFollowed: true,
  id: user.id,
  name: user.firstName,
  pictureSrc: user.pictureSrc,
  surname: user.lastName,
  text: user.status,
}));

type HomeProps = { isLoggedIn?: boolean };

const Home = ({ isLoggedIn = true }: HomeProps) => {
  const navigate = useNavigate();

  const userNotLoggedInRedirect = () => {
    console.log('isLoggedIn', isLoggedIn);
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  return (
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

        <Box $flexGrow={1} onClick={userNotLoggedInRedirect}>
          <SearchBar
            elements={usersForSearchBar}
            renderElement={searchBarRenderElement}
            onInputChange={() => console.log('typed')}
          />
        </Box>
        <EditProfile />
      </Box>

      <Box onClick={userNotLoggedInRedirect}>
        <TextArea
          onChange={(event) => console.log(event.target.value)}
          placeholder={
            isLoggedIn
              ? 'Do you want to share something?'
              : 'Click Login and start sending messages...'
          }
          $resize="vertical"
          onSend={() => console.log('a')}
          buttonText={isLoggedIn ? 'Send' : 'Login'}
        />
      </Box>
      <Box onClick={userNotLoggedInRedirect}>
        <Card>
          <TabProvider
            tabs={[
              {
                id: 'For you',
                title: 'For you',
                content: (
                  <>
                    {postsWithAuthor.map(({ user, post }) => (
                      <PostCard user={user} post={post} key={post.id} />
                    ))}
                  </>
                ),
              },
              {
                id: 'Following',
                title: 'Following',
                content: (
                  <>
                    {usersForProfileCard.map((user) => (
                      <ProfileCard user={user} key={user.id} />
                    ))}
                  </>
                ),
              },
            ]}
          />
        </Card>
      </Box>
    </PageContainer>
  );
};

export default Home;
