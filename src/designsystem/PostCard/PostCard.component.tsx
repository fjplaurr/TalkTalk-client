import React from 'react';
import { Box, Avatar, Text, Theme } from '..';

type PostCardProps = {
  user: {
    pictureSrc: string;
    name: string;
    surname: string;
    text: string;
    id: string;
  };
};

const PostCard = ({
  user: { name, pictureSrc, surname, text },
}: PostCardProps) => (
  <Box
    $pr={Theme.setSpace(12)}
    $pl={Theme.setSpace(12)}
    $display="flex"
    $alignItems="flex-start"
    $gap={Theme.setSpace(16)}
  >
    <Avatar avatar={{ src: pictureSrc, name }} />
    <Box>
      <Text fontWeight="bold">{`${name} ${surname}`}</Text>
      <Text fontWeight="regular" fontSize="small" noOfLines={3}>
        {text}
      </Text>
    </Box>
  </Box>
);

export default PostCard;
