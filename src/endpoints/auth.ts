import { post } from '../helpers/fetch';
import { User } from '../interfaces';
import { loadUser } from '../helpers/localStorage';

// URL
const url = `${process.env.REACT_APP_API_URL}/auth/`;

// Headers
const userFromLocalStorage = loadUser();
const headers = {
  authorization: `Bearer ${userFromLocalStorage?.token}`,
};

// Post
export const signup: (user: User) => Promise<{ user: User; token: string }> = (
  user,
) => post(`${url}signup`, user);

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<
  | { errors: string[]; accessToken: never; user: never }
  | { accessToken: string; user: User; errors: never }
> => post(`${url}login`, { email, password }, headers);
