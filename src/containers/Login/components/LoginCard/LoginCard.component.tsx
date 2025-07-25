import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button, Text } from '../../../../designsystem';
import Card from '../Card';
import { LoginPayload } from '../../withData';
import { useNavigate } from 'react-router';
import { login } from '../../../../endpoints/auth';
import { saveUser } from '../../../../helpers/localStorage';
import { useUser } from '../../../../providers/UserProvider';

const StyledText = styled(Text)`
  text-align: center;
`;

const LoginCard = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const { setUser, setAccessToken } = useUser();

  const navigate = useNavigate();

  const handleLoginClick = async (payload: LoginPayload) => {
    console.log('calling with', payload);
    const { errors, accessToken, user } = await login({
      email: payload.email,
      password: payload.password,
    });

    if (!errors) {
      console.log('gonna')
      saveUser({ token: accessToken, id: user._id });
      setAccessToken(accessToken);
      setUser(user);
      console.log('call')
      navigate('/');
      console.log('navigate', navigate)
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
