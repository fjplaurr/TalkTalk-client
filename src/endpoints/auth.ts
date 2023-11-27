import { post } from '../helpers/fetch';
import { User } from '../interfaces';
import { CreateUserPayload } from '../interfaces/user.dto';

// URL
const url = `${process.env.REACT_APP_API_URL}/auth/`;

// Post
type Error = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

type SignupOutput = Promise<
  | { errors: Error[]; accessToken: never; user: never }
  | { accessToken: string; user: User; errors: never }
>;

export const signup = ({
  email,
  password,
  firstName,
  lastName,
}: CreateUserPayload): SignupOutput =>
  post(`${url}signup`, { email, password, firstName, lastName });

type LoginOutput = Promise<
  | { errors: string[]; accessToken: never; user: never }
  | { accessToken: string; user: User; errors: never }
>;

type LoginInput = {
  email: string;
  password: string;
};

export const login = ({ email, password }: LoginInput): LoginOutput =>
  post(`${url}login`, { email, password });
