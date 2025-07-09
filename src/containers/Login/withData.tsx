import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Post } from '../../interfaces';
import { CreateUserPayload } from '../../interfaces/user.dto';
import { login, signup } from '../../endpoints/auth';
import { saveUser } from '../../helpers/localStorage';
import type { LoginProps } from './Login.component';

export type PostWithAuthor = { post: Post } & { author: User };

type WithDataWrapperProps = {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type LoginPayload = {
  email: string;
  password: string;
};

type WithData = (
  WrappedComponent: React.ComponentType<LoginProps>,
) => React.ComponentType<WithDataWrapperProps>;

const withData: WithData = (WrappedComponent) =>
  function WithDataWrapper({ setUser, setAccessToken }: WithDataWrapperProps) {
    const [loginError, setLoginError] = React.useState('');
    const [signupError, setSignupError] = React.useState('');

    const navigate = useNavigate();

    const handleLoginClick = async (payload: LoginPayload) => {
      const res = await login({
        email: payload.email,
        password: payload.password,
      });

      if (!res.errors) {
        saveUser({ token: res.accessToken, id: res.user._id });
        setAccessToken(res.accessToken);
        setUser(res.user);
        navigate('/');
      } else {
        setLoginError('Invalid email and/or password');
      }
    };

    const handleSignupClick = async (payload: CreateUserPayload) => {
      const res = await signup(payload);
      if (!res.errors) {
        saveUser({ token: res.accessToken, id: res.user._id });
        setAccessToken(res.accessToken);
        setUser(res.user);
        navigate('/');
      } else {
        setSignupError(`${res.errors[0].param}: ${res.errors[0].msg}`);
      }
    };

    return (
      <WrappedComponent
        onLoginClick={(payload: LoginPayload) => handleLoginClick(payload)}
        onSignupClick={(payload: CreateUserPayload) =>
          handleSignupClick(payload)
        }
        loginError={loginError}
        signupError={signupError}
      />
    );
  };

export { withData };
