import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { signup } from '../../endpoints/auth';
import Login, { LoginProps } from './Login.component';

const mockedSignUp = signup as jest.MockedFunction<typeof signup>;

const props: LoginProps = {
  setUser: jest.fn(),
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

test('Redirects to the Home page when the user logs in', () => {
  render(<Login {...props} />);
  // type email
  const emailInputs = screen.getAllByPlaceholderText('Email');
  const emailLoginInput = emailInputs[0];
  userEvent.type(emailLoginInput, 'mockemail@mockemail.com');

  // type password
  const passwordInputs = screen.getAllByPlaceholderText('Password');
  const passwordLoginInput = passwordInputs[0];
  userEvent.type(passwordLoginInput, 'mockpassword');

  // click login button
  const loginButton = screen.getByRole('button', { name: 'Login' });
  userEvent.click(loginButton);
});
