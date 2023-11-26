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
  setUser: React.Dispatch<React.SetStateAction<User>>;
  allUsers: User[];
  createNewPost: (text: string) => void;
  onFollowClick: (id: string) => void;
};

const Home = ({
  postsWithAuthors,
  followingUsers,
  user,
  allUsers,
  setUser,
  createNewPost,
  onFollowClick,
}: HomeProps) => {
  const navigate = useNavigate();

  const isLoggedIn = Boolean(user);
  const [searchBarFilter, setSearchBarFilter] = React.useState('');
  const [newPostText, setNewPostText] = React.useState('');

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

  const userNotLoggedInRedirect = () => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  // filter allUsers using its firstName or lastName by searchBarFilter
  const filteredSearchBarUsers = allUsers.filter((u) => {
    const lowerCaseSearchBarFilter = searchBarFilter.toLocaleLowerCase();
    if (lowerCaseSearchBarFilter === '') return false;

    const lowerCaseFirstName = u.firstName.toLocaleLowerCase();
    const lowerCaseLastName = u.lastName.toLocaleLowerCase();

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
        <Logo color="darkBlue" />

        <Box $flexGrow={1} onClick={userNotLoggedInRedirect}>
          <SearchBar
            elements={usersForSearchBar}
            renderElement={searchBarRenderElement}
            onInputChange={(value) => setSearchBarFilter(value)}
          />
        </Box>
        <Box onClick={userNotLoggedInRedirect}>
          <EditProfile user={user} setUser={setUser} />
        </Box>
      </Box>

      <Box onClick={userNotLoggedInRedirect}>
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
