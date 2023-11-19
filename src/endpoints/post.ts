import { get, post, put, deleteById } from '../helpers/fetch';
import { Post } from '../interfaces';
import { loadUser } from '../helpers/localStorage';

const url = `${process.env.REACT_APP_API_URL}/posts/`;

// Headers
const parsedObject = loadUser();
const headers = {
  authorization: `Bearer ${parsedObject?.token}`,
};

// Get
export const getAll = (): Promise<Post[]> => get(`${url}`, headers);
export const getSingle = (id: string) => get(`${url}${id}`, headers);

// Post
export const create = (message: Post) => post(`${url}`, message, headers);

// Put
export const update = (message: Post) =>
  put(`${url}${message.id}`, message, headers);

// Delete
export const deleteSingle = (id: string) => deleteById(`${url}${id}`, headers);