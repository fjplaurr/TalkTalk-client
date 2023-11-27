import React from 'react';
import styled from 'styled-components';
import { Box, Text, Theme, TextInput, Button } from '../../designsystem';
import Logo from '../../designsystem/Logo';
import Card from './components/Card';
import { withData, LoginPayload, SignupPayload } from './withData';

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
  onLoginClick: (payload: LoginPayload) => Promise<void>;
  onSignupClick: (payload: SignupPayload) => Promise<void>;
  loginError?: string;
  signupError?: string;
};

const Login = ({
  onLoginClick,
  onSignupClick,
  loginError,
  signupError,
}: LoginProps) => {
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const [signupUsername, setSignupUsername] = React.useState('');
  const [signupEmail, setSignupEmail] = React.useState('');
  const [signupPassword, setSignupPassword] = React.useState('');

  const handleLoginClick = () =>
    onLoginClick({ email: loginEmail, password: loginPassword });

  const handleSignupClick = () => {
    onSignupClick({
      name: signupUsername,
      email: signupEmail,
      password: signupPassword,
    });
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
            onChange={(event) => setSignupUsername(event.target.value)}
            type="text"
            placeholder="Username"
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
      </Box>
    </PageContainer>
  );
};

export default withData(Login);
export { Login };
