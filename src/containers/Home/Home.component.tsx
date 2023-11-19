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
import { User } from '../../interfaces';
import Card from './components/Card';
import EditProfile from './components/EditProfile';
import { PostWithAuthor, withData } from './withData';

type UserForSearchBar = {
  id: string;
  isFollowed: boolean;
  name: string;
  surname: string;
  pictureSrc: string;
  text: string;
};

const searchBarRenderElement = (user: UserForSearchBar) => (
  <ProfileCard
    isFollowed={user.isFollowed}
    name={user.name}
    pictureSrc={user.pictureSrc}
    surname={user.surname}
    text={user.text}
  />
);

const PageContainer = styled(Box)`
  padding-inline: 4vw;

  @media (min-width: 50rem) {
    padding-inline: 28.2vw;
  }
`;

type HomeProps = {
  postsWithAuthors: PostWithAuthor[];
  followingUsers: User[];
  user: User;
  allUsers: User[];
};

const Home = ({
  postsWithAuthors,
  followingUsers,
  user,
  allUsers,
}: HomeProps) => {
  const navigate = useNavigate();

  const isLoggedIn = Boolean(user);

  const userNotLoggedInRedirect = () => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  const usersForSearchBar: UserForSearchBar[] = allUsers.map((u) => ({
    id: u._id,
    isFollowed: true,
    name: u.firstName,
    surname: u.lastName,
    pictureSrc: u.pictureSrc,
    text: u.status,
  }));

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
        {postsWithAuthors && (
          <Card>
            <TabProvider
              tabs={[
                {
                  id: 'For you',
                  title: 'For you',
                  content: (
                    <>
                      {postsWithAuthors.map(({ author, post }) => (
                        <PostCard
                          user={{
                            name: author.firstName,
                            pictureSrc: author.pictureSrc,
                            surname: author.lastName,
                          }}
                          post={{ description: post.text }}
                          key={post._id}
                        />
                      ))}
                    </>
                  ),
                },
                {
                  id: 'Following',
                  title: 'Following',
                  content: (
                    <>
                      {followingUsers.map(
                        ({ _id, firstName, pictureSrc, lastName, status }) => (
                          <ProfileCard
                            isFollowed
                            name={firstName}
                            pictureSrc={pictureSrc}
                            surname={lastName}
                            text={status}
                            key={_id}
                          />
                        ),
                      )}
                    </>
                  ),
                },
              ]}
            />
          </Card>
        )}
      </Box>
    </PageContainer>
  );
};

export default withData(Home);
