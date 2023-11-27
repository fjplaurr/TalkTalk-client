import { User } from './User';

export interface CreateUserPayload
  extends Pick<User, 'password' | 'email' | 'firstName' | 'lastName'> {}
