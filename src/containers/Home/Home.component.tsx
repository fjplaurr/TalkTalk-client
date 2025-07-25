import React, { useState } from 'react';
import styled from 'styled-components';
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
import { useUser } from '../../providers/UserProvider';

type UserForSearchBar = {
  id: string;
  isFollowed: boolean;
  name: string;
  surname: string;
  pictureSrc: string;
  text: string;
};

const PageContainer = styled(Box)`
  padding-inline: 4vw;

  @media (min-width: 50rem) {
    padding-inline: 28.2vw;
  }
`;

const LogoWrapper = styled(Box)`
  display: none;

  @media (min-width: 40rem) {
    display: block;
  }
`;

export type HomeProps = {
  postsWithAuthors: PostWithAuthor[];
  followingUsers: User[];
  allUsers: User[];
  createNewPost: (text: string) => void;
  onFollowClick: (id: string) => void;
  redirect?: () => void;
};

const Home: React.FC<HomeProps> = ({
  postsWithAuthors,
  followingUsers,
  allUsers,
  createNewPost,
  onFollowClick,
  redirect,
}) => {
  const { user, setUser, accessToken } = useUser();
  const isLoggedIn = Boolean(user);

  const [searchBarFilter, setSearchBarFilter] = useState('');
  const [newPostText, setNewPostText] = useState('');

  const searchBarRenderElement = (userForSearchBar: UserForSearchBar) => (
    <ProfileCard
      isFollowed={userForSearchBar.isFollowed}
      name={userForSearchBar.name}
      pictureSrc={userForSearchBar.pictureSrc}
      surname={userForSearchBar.surname}
      text={userForSearchBar.text}
      onFollowClick={() => onFollowClick(userForSearchBar.id)}
    />
  );

  // filter allUsers using its firstName or lastName by searchBarFilter
  const filteredSearchBarUsers = allUsers.filter((u) => {
    const lowerCaseSearchBarFilter = searchBarFilter.toLowerCase();
    if (lowerCaseSearchBarFilter === '') return false;

    const lowerCaseFirstName = u.firstName.toLowerCase();
    const lowerCaseLastName = u.lastName.toLowerCase();

    return (
      lowerCaseFirstName.includes(lowerCaseSearchBarFilter) ||
      lowerCaseLastName.includes(lowerCaseSearchBarFilter) ||
      `${lowerCaseFirstName} ${lowerCaseLastName}`.includes(
        lowerCaseSearchBarFilter,
      )
    );
  });

  const usersForSearchBar = filteredSearchBarUsers.map((u) => ({
    id: u._id,
    isFollowed: user?.followingUsers.includes(u._id) ?? false,
    name: u.firstName,
    surname: u.lastName,
    pictureSrc: u.pictureSrc,
    text: u.status,
  }));

  const handlePostSend = () => {
    if (newPostText !== '') {
      createNewPost(newPostText);
    }
    setNewPostText('');
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
        <LogoWrapper>
          <Logo color="darkBlue" />
        </LogoWrapper>

        <Box $flexGrow={1} onClick={redirect}>
          <SearchBar
            elements={usersForSearchBar}
            renderElement={searchBarRenderElement}
            onInputChange={(value) => {
              setSearchBarFilter(value);
            }}
            placeholder="Search users"
          />
        </Box>
        <Box onClick={redirect}>
          <EditProfile
            user={user}
            setUser={setUser}
            accessToken={accessToken}
          />
        </Box>
      </Box>

      <Box onClick={redirect}>
        <TextArea
          onChange={(event) => setNewPostText(event.target.value)}
          placeholder={
            isLoggedIn
              ? 'Do you want to share something?'
              : 'Click Login and start sending messages...'
          }
          $resize="vertical"
          onSend={handlePostSend}
          buttonText={isLoggedIn ? 'Send' : 'Login'}
        />
      </Box>
      <Box onClick={redirect}>
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
                            onFollowClick={() => onFollowClick(_id)}
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
export { Home };
