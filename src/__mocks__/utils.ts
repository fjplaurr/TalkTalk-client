import { User } from '../interfaces';

type CreateMockUser = (overrides?: Partial<User>) => User;

export const createMockUser: CreateMockUser = (overrides) => ({
  email: `mockUser@mockUser.com`,
  password: 'mockUser',
  firstName: 'mockFirstName',
  lastName: 'mockLastName',
  _id: 'mockId',
  followingUsers: ['123', '456'],
  status: 'mockStatus',
  pictureSrc: 'mockPictureSrc',
  ...overrides,
});

export const MOCK_ACCESS_TOKEN = 'mockAccessToken';
