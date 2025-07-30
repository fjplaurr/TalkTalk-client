import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Post, User } from '../../interfaces';
import Card from './components/Card';
import EditProfile from './components/EditProfile';
import { useUser } from '../../providers/UserProvider';
import {
  getSingle,
  getAll as getAllUsers,
  update as updateUser,
} from '../../endpoints/user';
import {
  getAll as getAllPosts,
  create as createPost,
} from '../../endpoints/post';

type PostWithAuthor = { post: Post; author: User };

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

const Home: React.FC = () => {
  const { user, setUser, accessToken } = useUser();
  const isLoggedIn = Boolean(user);

  const [searchBarFilter, setSearchBarFilter] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [postsWithAuthors, setPostsWithAuthors] = useState<PostWithAuthor[]>(
    [],
  );
  const [followingUsers, setFollowingUsers] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const navigate = useNavigate();

  const redirect = () => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  useEffect(() => {
    async function fetchPosts() {
      if (user) {
        const postsFromDB = await getAllPosts();
        const promises = postsFromDB.map((post) => getSingle(post.authorId));
        const users = await Promise.all(promises);

        const postsWithUsers: PostWithAuthor[] = postsFromDB.map(
          (post, index) => ({
            post,
            author: users[index],
          }),
        );

        setPostsWithAuthors(postsWithUsers);
      }
    }

    fetchPosts();
  }, [user]);

  useEffect(() => {
    async function getFollowingUsers() {
      if (user) {
        const promises = user.followingUsers.map((id) => getSingle(id));
        const followingUsersFromDB = await Promise.all(promises);
        setFollowingUsers(followingUsersFromDB);
      }
    }

    getFollowingUsers();
  }, [user]);

  useEffect(() => {
    async function fetchUsers() {
      let users = await getAllUsers();
      if (user) {
        // remove the current user
        users = users.filter((u) => u._id !== user._id);
      }

      setAllUsers(users);
    }

    fetchUsers();
  }, [user]);

  const createNewPost = async (text: string) => {
    if (user) {
      const newPost = {
        text,
        date: new Date(),
        authorId: user._id,
      };

      const newPostId = await createPost(newPost);

      const newPostWithAuthor: PostWithAuthor = {
        post: { ...newPost, _id: newPostId },
        author: user,
      };

      setPostsWithAuthors((prev) => {
        if (prev) {
          return [newPostWithAuthor, ...prev];
        }
        return [newPostWithAuthor];
      });
    }
  };

  const updateUserFollowing = async (
    followingUserId: string,
    action: 'follow' | 'unfollow',
  ) => {
    if (!user) return;

    let updatedFollowingUsers = user.followingUsers || [];

    if (
      action === 'follow' &&
      !updatedFollowingUsers.includes(followingUserId)
    ) {
      updatedFollowingUsers = [...updatedFollowingUsers, followingUserId];
    } else if (action === 'unfollow') {
      updatedFollowingUsers = updatedFollowingUsers.filter(
        (id) => id !== followingUserId,
      );
    }

    await updateUser(user._id, { followingUsers: updatedFollowingUsers });

    setUser({
      ...user,
      followingUsers: updatedFollowingUsers,
    });
  };

  const onFollowClick = (id: string) => {
    if (user && user.followingUsers.includes(id)) {
      updateUserFollowing(id, 'unfollow');
    } else {
      updateUserFollowing(id, 'follow');
    }
  };

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

export default Home;
