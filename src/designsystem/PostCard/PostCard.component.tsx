import React from 'react';
import styled from 'styled-components';
import { Box, Avatar, Text, Theme } from '..';
import Themes from '../themes';

type PostCardProps = {
  user: {
    pictureSrc: string;
    name: string;
    surname: string;
  };
  post: {
    description: string;
  };
};

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${Themes.setSpace(8)};
  @media (min-width: 40rem) {
    gap: ${Themes.setSpace(16)};
  }
`;

const PostCard = ({
  user: { name, pictureSrc, surname },
  post: { description },
}: PostCardProps) => (
  <StyledContainer>
    <Avatar avatar={{ src: pictureSrc, name }} />
    <Box>
      <Text fontWeight="bold">{`${name} ${surname}`}</Text>
      <Text fontWeight="regular" fontSize="small" $noOfLines={3}>
        {description}
      </Text>
    </Box>
  </StyledContainer>
);

export default PostCard;
