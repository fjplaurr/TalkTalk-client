import { get, patch, deleteById } from '../helpers/fetch';
import { User } from '../interfaces';
import { loadUser } from '../helpers/localStorage';

const url = `${process.env.REACT_APP_API_URL}/users/`;

// Headers
const parsedObject = loadUser();
const headers = {
  authorization: `Bearer ${parsedObject?.token}`,
};

// Get
export const getAll = (): Promise<User[]> => get(`${url}`, headers);
export const getSingle = (id: string): Promise<User> =>
  get(`${url}${id}`, headers);
export const getFollowing = (id: string) =>
  get(`${url}following/${id}`, headers);
export const getFollowers = (id: string) =>
  get(`${url}followers/${id}`, headers);
export const getFollowingAndFollowers = (
  id: string,
): Promise<{ following: User[]; followers: User[] }> =>
  get(`${url}followingandfollowers/${id}`, headers);
export const getOwnAndOthersPosts = (userId: string) =>
  get(`${url}${userId}/following/posts`, headers);
export const getUsersPosts = (userId: string) =>
  get(`${url}${userId}/posts`, headers);
export const getFilteredUsers: (term: string) => Promise<User[]> = (term) =>
  get(`${url}term/${term}`, headers);

// Patch
export const update = (userId: string, userFields: Partial<User>) =>
  patch(`${url}${userId}`, userFields, headers);

// Delete
export const deleteSingle = (id: string) => deleteById(`${url}${id}`, headers);
