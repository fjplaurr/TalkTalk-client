import React from 'react';
import Box from '../../designsystem/Box';
import Avatar from '../../designsystem/Avatar';
import Text from '../../designsystem/Text';
import { setSpace } from '../../designsystem/themes';

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
    pt={setSpace(12)}
    pr={setSpace(12)}
    pb={setSpace(12)}
    pl={setSpace(12)}
    width={setSpace(354)}
    gap={setSpace(16)}
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
