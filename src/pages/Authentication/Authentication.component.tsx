import React from 'react';
import styled from 'styled-components';
import { Box, Text, Theme } from '../../designsystem';
import Logo from '../../designsystem/Logo';
import LoginCard from './components/LoginCard';
import SignupCard from './components/SignupCard';

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

const WrapperLogo = styled(Box)`
  display: block;
  @media (min-width: 40rem) {
    display: none;
  }
`;

const Authentication = () => (
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

      <LoginCard />
      <SignupCard />
    </Box>
  </PageContainer>
);

export default Authentication;
