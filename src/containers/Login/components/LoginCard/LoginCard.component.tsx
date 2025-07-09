import React from 'react';
import styled from 'styled-components';
import { TextInput, Button, Text } from '../../../../designsystem';
import Card from '../Card';
import { LoginPayload } from '../../withData';

const StyledText = styled(Text)`
  text-align: center;
`;

const LoginCard = ({
  onLoginClick,
  loginError,
}: {
  onLoginClick: (payload: LoginPayload) => Promise<void>;
  loginError?: string;
}) => {
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');

  const handleLoginClick = () =>
    onLoginClick({ email: loginEmail, password: loginPassword });

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
      />
      <TextInput
        name="password"
        onChange={(event) => setLoginPassword(event.target.value)}
        type="password"
        placeholder="Password"
      />
      {loginError && (
        <Text color="darkRed" fontSize="regular" fontWeight="regular">
          {loginError}
        </Text>
      )}
      <Button $variant="primary" onClick={handleLoginClick}>
        Login
      </Button>
    </Card>
  );
};

export default LoginCard;
