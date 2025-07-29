import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate, MemoryRouter } from 'react-router';
import Login from './Login.component';
import { login, signup } from '../../endpoints/auth';
import { User } from '../../interfaces';
import { createMockUser, MOCK_ACCESS_TOKEN } from '../../__mocks__/utils';

// Mock dependencies
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

jest.mock('../../endpoints/auth', () => ({
  login: jest.fn(),
  signup: jest.fn(),
}));

// Test constants
const TEST_EMAIL = 'mockemail@mockemail.com';
const TEST_PASSWORD = 'mockpassword';

export interface CreateUserPayload
  extends Pick<User, 'password' | 'email' | 'firstName' | 'lastName'> {}

const renderComponentWithRouter = () =>
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

const typeLoginCredentials = async (email: string, password: string) => {
  await userEvent.type(screen.getByTestId('emailLoginInput'), email);
  await userEvent.type(screen.getByTestId('passwordLoginInput'), password);
};

const typeSignupCredentials = async (email: string, password: string) => {
  await userEvent.type(screen.getByTestId('emailSignupInput'), email);
  await userEvent.type(screen.getByTestId('passwordSignupInput'), password);
};

const clickButton = async (role: string, name: string) => {
  const button = screen.getByRole(role, { name });
  await userEvent.click(button);
};

const setupNavigateMock = () => {
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  return mockNavigate;
};

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
  const mockNavigate = setupNavigateMock();
  (login as jest.Mock).mockReturnValue({
    accessToken: MOCK_ACCESS_TOKEN,
    user: createMockUser(),
    errors: null,
  });
  renderComponentWithRouter();

  await waitFor(() => {
    typeLoginCredentials(TEST_EMAIL, TEST_PASSWORD);
    clickButton('button', 'Login');
    expect(mockNavigate).toHaveBeenCalled();
  });
});

test('Renders loginError when loginError is defined', async () => {
  (login as jest.Mock).mockReturnValue({
    accessToken: null,
    user: null,
    errors: ['Some error occurred'],
  });

  renderComponentWithRouter();

  await waitFor(() => {
    typeLoginCredentials(TEST_EMAIL, TEST_PASSWORD);
    clickButton('button', 'Login');
    const loginError = screen.getByText('Invalid email and/or password');
    expect(loginError).toBeInTheDocument();
  });
});

test('Navigates when the user signs up', async () => {
  const mockNavigate = setupNavigateMock();
  (signup as jest.Mock).mockReturnValue({
    accessToken: MOCK_ACCESS_TOKEN,
    user: createMockUser(),
    errors: null,
  });

  renderComponentWithRouter();

  await waitFor(() => {
    typeSignupCredentials(TEST_EMAIL, TEST_PASSWORD);
    clickButton('button', 'Register');
    expect(mockNavigate).toHaveBeenCalled();
  });
});
