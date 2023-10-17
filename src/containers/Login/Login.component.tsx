/* eslint-disable */
import React from 'react';
import { Box, Text, Theme, TextInput, Button } from 'harmony-kit';
import Logo from '../../components/Logo';
import styles from './Login.module.css';

const Login = () => {
  return (
    <Box minHeight="100vh" noBorder display="flex">
      <Box
        noBorder
        noBorderRadius
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={Theme.setSpace(48)}
        pl={Theme.setSpace(56)}
        pr={Theme.setSpace(56)}
        backgroundColor="darkBlue"
        flex={1}
      >
        <Box noBorder position="absolute" top={Theme.setSpace(56)}>
          <Logo color="white" />
        </Box>
        <Text
          fontWeight="semibold"
          as="h1"
          color="white"
          fontSize="extraextralarge"
        >
          Join open discussions
          <span style={{ color: Theme.colors.midPink }}>.</span>
        </Text>
        <Text fontSize="large" fontWeight="regular" as="h2" color="white">
          TalkTalk let you share your thoughts and make new connections
          <span style={{ color: Theme.colors.midPink }}>.</span>
        </Text>
      </Box>
      <Box
        noBorder
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={Theme.setSpace(32)}
        flex={3}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={Theme.setSpace(24)}
          alignItems="center"
          justifyContent="center"
          pt={Theme.setSpace(24)}
          pr={Theme.setSpace(24)}
          pb={Theme.setSpace(24)}
          pl={Theme.setSpace(24)}
          width="62.5%"
        >
          <Text fontSize="large" fontWeight="bold" color="midBlack">
            Login
          </Text>
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
          <Button variant="primary" width="100%">
            Login
          </Button>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={Theme.setSpace(24)}
          alignItems="center"
          justifyContent="center"
          pt={Theme.setSpace(24)}
          pr={Theme.setSpace(24)}
          pb={Theme.setSpace(24)}
          pl={Theme.setSpace(24)}
          width="62.5%"
        >
          <Text fontSize="large" fontWeight="bold" color="midBlack">
            Don't have an account yet?
          </Text>
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
          <Button variant="primary" width="100%">
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
