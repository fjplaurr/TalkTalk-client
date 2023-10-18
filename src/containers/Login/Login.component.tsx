/* eslint-disable */
import React from 'react';
import { Box, Text, Theme, TextInput, Button, Flex } from 'harmony-kit';
import Logo from '../../components/Logo';
import Card from './components/Card';
import styles from './Login.module.css';
import styled from 'styled-components';

const Login = () => {
  return (
    <Flex.Parent
      style={{
        minHeight: '100vh',
      }}
    >
      <Flex.Parent
        pl={Theme.setSpace(56)}
        pr={Theme.setSpace(56)}
        backgroundColor="darkBlue"
        flexDirection="column"
        justifyContent="center"
        gap={Theme.setSpace(48)}
        style={{
          flex: 1,
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: Theme.setSpace(56),
          }}
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
          <span style={{ color: Theme.colors.midPink }}>.</span>
        </Text>
        <Text fontSize="large" fontWeight="regular" as="h2" color="white">
          TalkTalk let you share your thoughts and make new connections
          <span style={{ color: Theme.colors.midPink }}>.</span>
        </Text>
      </Flex.Parent>
      <Flex.Parent
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={Theme.setSpace(32)}
        style={{
          flex: 3,
        }}
      >
        <Card>
          <Text fontSize="large" fontWeight="bold" color="midBlack">
            Login
          </Text>
          <TextInput
            width={'100%'}
            name="email"
            onChange={(event) => console.log(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <TextInput
            width={'100%'}
            name="password"
            onChange={(event) => console.log(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button variant="primary" width={'100%'}>
            Login
          </Button>
        </Card>

        <Card>
          <Text fontSize="large" fontWeight="bold" color="midBlack">
            Don't have an account yet?
          </Text>
          <TextInput
            width={'100%'}
            name="username"
            onChange={(event) => console.log(event.target.value)}
            type="text"
            placeholder="Username"
          />
          <TextInput
            width={'100%'}
            name="email"
            onChange={(event) => console.log(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <TextInput
            width={'100%'}
            name="password"
            onChange={(event) => console.log(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button variant="primary" width={'100%'}>
            Register
          </Button>
        </Card>
      </Flex.Parent>
    </Flex.Parent>
  );
};

export default Login;
