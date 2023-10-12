import React from 'react';
import { Box, Avatar, Text, Button, Theme } from 'harmony-kit';

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
      <Box width={Theme.setSpace(144)} noBorder>
        <Text fontWeight="bold" noOfLines={1}>{`${name} ${surname}`}</Text>
        <Text fontWeight="regular" fontSize="small" noOfLines={1}>
          {text}
        </Text>
      </Box>
    </Box>
    <Box ml="auto" noBorder>
      <Button
        width={Theme.setSpace(98)}
        variant={isFollowed ? 'destructive' : 'secondary'}
        onClick={() => console.log(`Clicked row`)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Box>
  </Box>
);

export default ProfileCard;
