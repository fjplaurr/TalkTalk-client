import { get, patch, deleteById } from '../helpers/fetch';
import { User } from '../interfaces';

const url = `${process.env.REACT_APP_API_URL}/users/`;

// Get
export const getAll = (): Promise<User[]> => get(`${url}`);
export const getSingle = (id: string): Promise<User> => get(`${url}${id}`);
export const getFollowing = (id: string) => get(`${url}following/${id}`);
export const getFollowers = (id: string) => get(`${url}followers/${id}`);
export const getFollowingAndFollowers = (
  id: string,
): Promise<{ following: User[]; followers: User[] }> =>
  get(`${url}followingandfollowers/${id}`);
export const getOwnAndOthersPosts = (userId: string) =>
  get(`${url}${userId}/following/posts`);
export const getUsersPosts = (userId: string) => get(`${url}${userId}/posts`);
export const getFilteredUsers: (term: string) => Promise<User[]> = (term) =>
  get(`${url}term/${term}`);

// Patch
export const update = (userId: string, userFields: Partial<User>) =>
  patch(`${url}${userId}`, userFields);

// Delete
export const deleteSingle = (id: string) => deleteById(`${url}${id}`);
