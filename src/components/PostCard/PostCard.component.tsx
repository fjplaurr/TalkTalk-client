import React from 'react';
import { Box, Avatar, Text, Theme } from 'harmony-kit';

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
    display="flex"
    alignItems="flex-start"
    noBorder
    pt={Theme.setSpace(12)}
    pr={Theme.setSpace(12)}
    pb={Theme.setSpace(12)}
    pl={Theme.setSpace(12)}
    width={Theme.setSpace(354)}
    gap={Theme.setSpace(16)}
  >
    <Avatar avatar={{ src: pictureSrc, name }} />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      noBorder
    >
      <Box noBorder>
        <Text fontWeight="bold">{`${name} ${surname}`}</Text>
        <Text fontWeight="regular" fontSize="small" noOfLines={3}>
          {text}
        </Text>
      </Box>
    </Box>
  </Box>
);

export default PostCard;
