import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { TextInput, Button, Text } from '../../../../designsystem';
import Card from '../Card';
import { login } from '../../../../endpoints/auth';
import { saveUser } from '../../../../helpers/localStorage';
import { useUser } from '../../../../providers/UserProvider';

const StyledText = styled(Text)`
  text-align: center;
`;

type LoginPayload = {
  email: string;
  password: string;
};

const LoginCard = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const { setUser, setAccessToken } = useUser();

  const navigate = useNavigate();

  const handleLoginClick = async (payload: LoginPayload) => {
    const { errors, accessToken, user } = await login({
      email: payload.email,
      password: payload.password,
    });

    if (!errors) {
      saveUser({ token: accessToken, id: user._id });
      setAccessToken(accessToken);
      setUser(user);
      navigate('/');
    } else {
      setLoginError('Invalid email and/or password');
    }
  };

  return (
    <Card>
      <StyledText fontSize="large" fontWeight="bold" color="midBlack">
        Login
      </StyledText>
      <TextInput
        name="email"
        onChange={(event) => setLoginEmail(event.target.value)}
        type="email"
        placeholder="Email"
        dataTestId="emailLoginInput"
      />
      <TextInput
        name="password"
        onChange={(event) => setLoginPassword(event.target.value)}
        type="password"
        placeholder="Password"
        dataTestId="passwordLoginInput"
      />
      {loginError && (
        <Text color="darkRed" fontSize="regular" fontWeight="regular">
          {loginError}
        </Text>
      )}
      <Button
        $variant="primary"
        onClick={() =>
          handleLoginClick({ email: loginEmail, password: loginPassword })
        }
      >
        Login
      </Button>
    </Card>
  );
};

export default LoginCard;
