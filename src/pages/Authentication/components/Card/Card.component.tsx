import React from 'react';
import styled from 'styled-components';
import { Theme, Box } from '../../../../designsystem';

type CardProps = { children: React.ReactNode };

const Container = styled(Box)`
  & > * {
    width: 100%;
  }

  width: 90%;
  @media (min-width: 50rem) {
    width: 62.5%;
  }
`;

const Card = ({ children }: CardProps) => (
  <Container
    $display="flex"
    $gap={Theme.setSpace(24)}
    $flexDirection="column"
    $alignItems="center"
    $justifyContent="center"
    $pt={`min(4vw, ${Theme.setSpace(56)})`}
    $pr={`min(4vw, ${Theme.setSpace(56)})`}
    $pb={`min(4vw, ${Theme.setSpace(56)})`}
    $pl={`min(4vw, ${Theme.setSpace(56)})`}
    $border={`1px solid ${Theme.colors.darkGray}`}
    $borderRadius={`calc(${Theme.minimumBorderRadius} * 2)`}
  >
    {children}
  </Container>
);

export default Card;
