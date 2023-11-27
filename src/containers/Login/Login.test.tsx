import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginProps, Login } from './Login.component';

const props: LoginProps = {
  onLoginClick: jest.fn(),
  loginError: undefined,
  onSignupClick: jest.fn(),
  signupError: undefined,
};

test('Renders a title, a subtitle and two logos', () => {
  render(<Login {...props} />);
  const title = screen.getByText('Join open discussions');
  expect(title).toBeInTheDocument();

  const subtitle = screen.getByText(
    'TalkTalk let you share your thoughts and make new connections',
  );
  expect(subtitle).toBeInTheDocument();

  const logos = screen.getAllByTitle('TalkTalk logo');
  expect(logos).toHaveLength(2);
});

test('Calls onLoginClick when the user logs in', async () => {
  render(<Login {...props} />);
  // type email
  const emailInputs = screen.getAllByPlaceholderText('Email');
  const emailLoginInput = emailInputs[0];
  act(() => {
    userEvent.type(emailLoginInput, 'mockemail@mockemail.com');
  });

  // type password
  const passwordInputs = screen.getAllByPlaceholderText('Password');
  const passwordLoginInput = passwordInputs[0];
  act(() => {
    userEvent.type(passwordLoginInput, 'mockpassword');
  });

  // click login button
  const loginButton = screen.getByRole('button', { name: 'Login' });
  userEvent.click(loginButton);
  expect(props.onLoginClick).toHaveBeenCalledTimes(1);
});

test('Renders loginError when loginError is defined', () => {
  render(<Login {...props} loginError="Invalid email and/or password" />);
  const loginError = screen.getByText('Invalid email and/or password');
  expect(loginError).toBeInTheDocument();
});

test('Calls onSignupClick when the user signs up', async () => {
  render(<Login {...props} />);
  // type email
  const emailInputs = screen.getAllByPlaceholderText('Email');
  const emailLoginInput = emailInputs[1];
  act(() => {
    userEvent.type(emailLoginInput, 'mockemail@mockemail.com');
  });

  // type password
  const passwordInputs = screen.getAllByPlaceholderText('Password');
  const passwordLoginInput = passwordInputs[0];
  act(() => {
    userEvent.type(passwordLoginInput, 'mockpassword');
  });

  // click signup button
  const signupButton = screen.getByRole('button', { name: 'Register' });
  userEvent.click(signupButton);
  expect(props.onSignupClick).toHaveBeenCalledTimes(1);
});

test('Renders signupError when signupError is defined', () => {
  render(<Login {...props} signupError="User email already exists" />);
  const signupError = screen.getByText('User email already exists');
  expect(signupError).toBeInTheDocument();
});
