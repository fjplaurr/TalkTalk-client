import React, { useEffect, useState } from 'react';
import { getSingle, getAll as getAllUsers } from '../../endpoints/user';
import { getAll as getAllPosts } from '../../endpoints/post';
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

    return (
      <WrappedComponent
        postsWithAuthors={postsWithAuthors}
        followingUsers={followingUsers}
        user={user}
        setUser={setUser}
        allUsers={allUsers}
      />
    );
  };

export { withData };
