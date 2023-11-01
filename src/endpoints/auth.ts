import { post } from '../helpers/fetch';
import { User } from '../interfaces';
import { loadUser } from '../helpers/localStorage';

// URL
const url = '/api/auth/';

// Headers
const parsedObject = loadUser();
const headers = {
  authorization: `Bearer ${parsedObject?.token}`,
};

// Post
export const signup: (user: User) => Promise<{ user: User; token: string }> = (
  user,
) => post(`${url}signup`, user);

export const signin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => post(`${url}signin`, { email, password }, headers);
