import { User } from '../interfaces';

export const getMockUser: () => User = () => ({
  email: `mockUser123123123123123@mockUser.com`,
  password: 'mockUser',
  firstName: 'mockFirstName',
  lastName: 'mockLastName',
  _id: 'mockId',
  followingUsers: ['123', '456'],
  status: 'mockStatus',
  pictureSrc: 'mockPictureSrc',
});

export const MOCK_ACCESS_TOKEN = 'mockAccessToken';
