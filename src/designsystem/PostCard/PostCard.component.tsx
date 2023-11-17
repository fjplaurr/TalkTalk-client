import React from 'react';
import { Box, Avatar, Text, Theme } from '..';

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

const PostCard = ({
  user: { name, pictureSrc, surname },
  post: { description },
}: PostCardProps) => (
  <Box $display="flex" $alignItems="flex-start" $gap={Theme.setSpace(16)}>
    <Avatar avatar={{ src: pictureSrc, name }} />
    <Box>
      <Text fontWeight="bold">{`${name} ${surname}`}</Text>
      <Text fontWeight="regular" fontSize="small" $noOfLines={3}>
        {description}
      </Text>
    </Box>
  </Box>
);

export default PostCard;
