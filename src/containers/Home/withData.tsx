import React, { useEffect, useState } from 'react';
import {
  getSingle,
  getAll as getAllUsers,
  update as updateUser,
} from '../../endpoints/user';
import {
  getAll as getAllPosts,
  create as createPost,
} from '../../endpoints/post';
import { User, Post } from '../../interfaces';

export type PostWithAuthor = { post: Post } & { author: User };

type HomeProps = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const withData = (WrappedComponent: any) =>
  function WithDataWrapper({ user, setUser }: HomeProps) {
    const [postsWithAuthors, setPostsWithAuthors] =
      useState<PostWithAuthor[]>();
    const [followingUsers, setFollowingUsers] = useState<User[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);

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

    const handleFollowClick = (id: string) => {
      if (user && user.followingUsers.includes(id)) {
        updateUserFollowing(id, 'unfollow');
      } else {
        updateUserFollowing(id, 'follow');
      }
    };

    return (
      <WrappedComponent
        postsWithAuthors={postsWithAuthors}
        followingUsers={followingUsers}
        user={user}
        setUser={setUser}
        allUsers={allUsers}
        createNewPost={createNewPost}
        onFollowClick={handleFollowClick}
      />
    );
  };

export { withData };
