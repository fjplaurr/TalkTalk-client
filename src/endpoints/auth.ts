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
type Error = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

type SignupOutput = Promise<
  | { errors: Error[]; user: never; token: never }
  | { user: User; token: string; errors: never }
>;

type SignupInput = {
  email: string;
  password: string;
  name: string;
};

export const signup = ({ email, password, name }: SignupInput): SignupOutput =>
  post(`${url}signup`, { email, password, name });

type LoginOutput = Promise<
  | { errors: string[]; accessToken: never; user: never }
  | { accessToken: string; user: User; errors: never }
>;

type LoginInput = {
  email: string;
  password: string;
};

export const login = ({ email, password }: LoginInput): LoginOutput =>
  post(`${url}login`, { email, password }, headers);
