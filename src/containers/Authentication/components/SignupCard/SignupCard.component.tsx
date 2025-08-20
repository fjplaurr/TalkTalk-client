import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, Text } from '../../../../designsystem';
import Card from '../Card';
import { CreateUserPayload } from '../../../../interfaces/user.dto';
import { signup } from '../../../../endpoints/auth';
import { saveUser } from '../../../../helpers/localStorage';
import { useUser } from '../../../../providers/UserProvider';

const StyledText = styled(Text)`
  text-align: center;
`;

const SignupCard = () => {
  const [signupFirstName, setsignupFirstName] = useState('');
  const [signupLastName, setsignupLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const { setUser, setAccessToken } = useUser();

  const navigate = useNavigate();

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
    <Card>
      <StyledText fontSize="large" fontWeight="bold" color="midBlack">
        {`Don't have an account yet?`}
      </StyledText>
      <TextInput
        name="firstName"
        onChange={(event) => setsignupFirstName(event.target.value)}
        type="text"
        placeholder="First name"
      />
      <TextInput
        name="lastName"
        onChange={(event) => setsignupLastName(event.target.value)}
        type="text"
        placeholder="Last name"
      />
      <TextInput
        name="email"
        onChange={(event) => setSignupEmail(event.target.value)}
        type="email"
        placeholder="Email"
        dataTestId="emailSignupInput"
      />
      <TextInput
        name="password"
        onChange={(event) => setSignupPassword(event.target.value)}
        type="password"
        placeholder="Password"
        dataTestId="passwordSignupInput"
      />
      {signupError && (
        <Text color="darkRed" fontSize="regular" fontWeight="regular">
          {signupError}
        </Text>
      )}
      <Button
        $variant="primary"
        onClick={() =>
          handleSignupClick({
            firstName: signupFirstName,
            lastName: signupLastName,
            email: signupEmail,
            password: signupPassword,
          })
        }
      >
        Register
      </Button>
    </Card>
  );
};

export default SignupCard;
