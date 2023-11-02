import React from 'react';
import { Theme, Box } from '../../../../designsystem';

type CardProps = { children: React.ReactNode };

const Card = ({ children }: CardProps) => (
  <Box
    $display="flex"
    $gap={Theme.setSpace(20)}
    $flexDirection="column"
    $alignItems="flex-start"
    $pt={`min(4vw, ${Theme.setSpace(14)})`}
    $pr={`min(4vw, ${Theme.setSpace(14)})`}
    $pb={`min(4vw, ${Theme.setSpace(14)})`}
    $pl={`min(4vw, ${Theme.setSpace(14)})`}
    $border={`1px solid ${Theme.colors.darkGray}`}
    $borderRadius={`calc(${Theme.minimumBorderRadius} * 2)`}
  >
    {children}
  </Box>
);

export default Card;
