import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button, Text } from '../../../../designsystem';
import Card from '../Card';
import { CreateUserPayload } from '../../../../interfaces/user.dto';

const StyledText = styled(Text)`
  text-align: center;
`;

type SignupCardProps = {
  onSignupClick: (payload: CreateUserPayload) => Promise<void>;
  signupError?: string;
};

const SignupCard = ({ onSignupClick, signupError }: SignupCardProps) => {
  const [signupFirstName, setsignupFirstName] = useState('');
  const [signupLastName, setsignupLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleSignupClick = () => {
    onSignupClick({
      firstName: signupFirstName,
      lastName: signupLastName,
      email: signupEmail,
      password: signupPassword,
    });
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
      />
      <TextInput
        name="password"
        onChange={(event) => setSignupPassword(event.target.value)}
        type="password"
        placeholder="Password"
      />
      {signupError && (
        <Text color="darkRed" fontSize="regular" fontWeight="regular">
          {signupError}
        </Text>
      )}
      <Button $variant="primary" onClick={handleSignupClick}>
        Register
      </Button>
    </Card>
  );
};

export default SignupCard;
