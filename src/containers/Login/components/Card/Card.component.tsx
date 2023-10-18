import React from 'react';
import { Theme, Flex } from 'harmony-kit';

type CardProps = { children: React.ReactNode };

const Card = ({ children }: CardProps) => (
  <Flex.Parent
    gap={Theme.setSpace(24)}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    pt={Theme.setSpace(24)}
    pr={Theme.setSpace(24)}
    pb={Theme.setSpace(24)}
    pl={Theme.setSpace(24)}
    style={{
      border: `1px solid ${Theme.colors.darkGray}`,
      borderRadius: `calc(${Theme.minimumBorderRadius} * 2)`,
      width: '62.5%',
    }}
  >
    {children}
  </Flex.Parent>
);

export default Card;
