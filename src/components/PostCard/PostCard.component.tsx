import React from 'react';
import Box from '../../designsystem/Box';
import Avatar from '../../designsystem/Avatar';
import Text from '../../designsystem/Text';

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
    pt="12px"
    pr="12px"
    pb="12px"
    pl="12px"
    width="354px"
    gap="16px"
  >
    <Avatar avatar={{ src: pictureSrc, name }} />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      noBorder
    >
      <Box width="544px" noBorder>
        <Text fontWeight="bold">{`${name} ${surname}`}</Text>
        <Text fontWeight="regular" fontSize="small" noOfLines={3}>
          {text}
        </Text>
      </Box>
    </Box>
  </Box>
);

export default PostCard;
