import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Theme, TextInput, Button } from '../../designsystem';
import Logo from '../../designsystem/Logo';
import Card from './components/Card';
import { login } from '../../endpoints/auth';
import { getSingle } from '../../endpoints/user';
import { User } from '../../interfaces';

const PageContainer = styled(Box)`
  min-height: 100vh;
`;

const BrandPresenter = styled(Box)`
  display: none;
  @media (min-width: 40rem) {
    display: flex;
  }
`;

const StyledSpan = styled.span`
  color: ${Theme.colors.midPink};
`;

const StyledText = styled(Text)`
  text-align: center;
`;

const WrapperLogo = styled(Box)`
  display: block;
  @media (min-width: 40rem) {
    display: none;
  }
`;

export type LoginProps = {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const Login = ({ setUser }: LoginProps) => {
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState('');

  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const res = await login({
      email: loginEmail,
      password: loginPassword,
    });

    if (!res.errors) {
      setUser(res.user);
      navigate('/');
    } else {
      setLoginError('Invalid email and/or password');
    }
  };

  return (
    <PageContainer $display="flex">
      <BrandPresenter
        $pl={`min(4vw, ${Theme.setSpace(56)})`}
        $pr={`min(4vw, ${Theme.setSpace(56)})`}
        $backgroundColor="darkBlue"
        $flexDirection="column"
        $justifyContent="center"
        $gap={Theme.setSpace(48)}
        $flex={1}
      >
        <Box
          $position="absolute"
          $top={Theme.setSpace(56)}
          className="logoWrapper"
        >
          <Logo color="white" />
        </Box>
        <Text
          fontWeight="semibold"
          as="h1"
          color="white"
          fontSize="extraextralarge"
        >
          Join open discussions
          <StyledSpan>.</StyledSpan>
        </Text>
        <Text fontSize="large" fontWeight="regular" as="h2" color="white">
          TalkTalk let you share your thoughts and make new connections
          <StyledSpan>.</StyledSpan>
        </Text>
      </BrandPresenter>
      <Box
        $display="flex"
        $flexDirection="column"
        $alignItems="center"
        $justifyContent="center"
        $flex={3}
        $gap={Theme.setSpace(32)}
        $mt={Theme.setSpace(32)}
        $mb={Theme.setSpace(32)}
      >
        <WrapperLogo>
          <Logo color="darkBlue" />
        </WrapperLogo>
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
        <Card>
          <StyledText fontSize="large" fontWeight="bold" color="midBlack">
            {`Don't have an account yet?`}
          </StyledText>
          <TextInput
            name="username"
            onChange={(event) => console.log(event.target.value)}
            type="text"
            placeholder="Username"
          />
          <TextInput
            name="email"
            onChange={(event) => console.log(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <TextInput
            name="password"
            onChange={(event) => console.log(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button $variant="primary">Register</Button>
        </Card>
      </Box>
    </PageContainer>
  );
};

export default Login;
