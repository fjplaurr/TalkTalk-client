import { get, post, put, deleteById } from '../helpers/fetch';
import { Post } from '../interfaces';

const url = `${process.env.REACT_APP_API_URL}/posts/`;

// Get
export const getAll = (): Promise<Post[]> => get(`${url}`);
export const getSingle = (id: string) => get(`${url}${id}`);

// Post
interface CreatePostPayload extends Pick<Post, 'text' | 'authorId' | 'date'> {}
export const create = (message: CreatePostPayload) => post(`${url}`, message);

// Put
export const update = (message: Post) => put(`${url}${message._id}`, message);

// Delete
export const deleteSingle = (id: string) => deleteById(`${url}${id}`);
