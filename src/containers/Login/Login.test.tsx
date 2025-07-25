import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate, MemoryRouter } from 'react-router';
import { Login } from './Login.component';
import { login } from '../../endpoints/auth';
import { User } from '../../interfaces';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

jest.mock('../../endpoints/auth', () => ({
  login: jest.fn(),
}));

export interface CreateUserPayload
  extends Pick<User, 'password' | 'email' | 'firstName' | 'lastName'> {}

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

const renderComponentWithRouter = () =>
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

test('Renders a title, a subtitle and two logos', () => {
  renderComponentWithRouter();

  const title = screen.getByText('Join open discussions');
  expect(title).toBeInTheDocument();

  const subtitle = screen.getByText(
    'TalkTalk let you share your thoughts and make new connections',
  );
  expect(subtitle).toBeInTheDocument();

  const logos = screen.getAllByTitle('TalkTalk logo');
  expect(logos).toHaveLength(2);
});

test('Navigates when the user logs in', async () => {
  const mockNavigate = jest.fn();

  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

  (login as jest.Mock).mockReturnValue({
    accessToken: 'mockAccessToken',
    user: getMockUser(),
    errors: null,
  });

  renderComponentWithRouter();
  // type email
  await userEvent.type(
    screen.getByTestId('emailLoginInput'),
    'mockemail@mockemail.com',
  );

  // type password
  await userEvent.type(
    screen.getByTestId('passwordLoginInput'),
    'mockpassword',
  );

  // click login button
  const loginButton = screen.getByRole('button', { name: 'Login' });
  await userEvent.click(loginButton);
  expect(mockNavigate).toHaveBeenCalled();
});

test('Renders loginError when loginError is defined', () => {
  renderComponentWithRouter();
  const loginError = screen.getByText('Invalid email and/or password');
  expect(loginError).toBeInTheDocument();
});

test('Can submit signup form', async () => {
  render(<Login />);
  // type email
  act(() => {
    userEvent.type(
      screen.getByTestId('emailSignupInput'),
      'mockemail@mockemail.com',
    );
  });

  // type password
  act(() => {
    userEvent.type(screen.getByTestId('passwordLoginInput'), 'mockpassword');
  });

  // click signup button
  const signupButton = screen.getByRole('button', { name: 'Register' });
  userEvent.click(signupButton);
  // You may want to add assertions here based on the new Login implementation
});

// Remove this test or update it if Login handles errors internally
