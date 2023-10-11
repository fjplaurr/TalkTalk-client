import React from 'react';
import Box from '../../designsystem/Box';
import Avatar from '../../designsystem/Avatar';
import Text from '../../designsystem/Text';
import Button from '../../designsystem/Button';
import { setSpace } from '../../designsystem/themes';

type ProfileCardProps = {
  user: {
    isFollowed: boolean;
    pictureSrc: string;
    name: string;
    surname: string;
    text: string;
    id: string;
  };
};

const ProfileCard = ({
  user: { isFollowed, name, pictureSrc, surname, text },
}: ProfileCardProps) => (
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
      <Box width={setSpace(144)} noBorder>
        <Text fontWeight="bold" noOfLines={1}>{`${name} ${surname}`}</Text>
        <Text fontWeight="regular" fontSize="small" noOfLines={1}>
          {text}
        </Text>
      </Box>
    </Box>
    <Box ml="auto" noBorder>
      <Button
        width={setSpace(98)}
        variant={isFollowed ? 'destructive' : 'secondary'}
        onClick={() => console.log(`Clicked row`)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Box>
  </Box>
);

export default ProfileCard;
