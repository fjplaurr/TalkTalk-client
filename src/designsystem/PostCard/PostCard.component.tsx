import React from 'react';
import { Box, Avatar, Text, Theme } from "..";

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
    $pt={Theme.setSpace(12)}
    $pr={Theme.setSpace(12)}
    $pb={Theme.setSpace(12)}
    $pl={Theme.setSpace(12)}
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      width: Theme.setSpace(354),
      gap: Theme.setSpace(16),
    }}
  >
    <Avatar avatar={{ src: pictureSrc, name }} />
    <Box
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Text fontWeight="bold">{`${name} ${surname}`}</Text>
        <Text fontWeight="regular" fontSize="small" noOfLines={3}>
          {text}
        </Text>
      </Box>
    </Box>
  </Box>
);

export default PostCard;
