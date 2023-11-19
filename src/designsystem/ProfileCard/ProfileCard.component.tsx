import React from 'react';
import { Box, Avatar, Text, Button, Theme } from '..';

type ProfileCardProps = {
  isFollowed: boolean;
  pictureSrc: string;
  name: string;
  surname: string;
  text: string;
};

const ProfileCard = ({
  isFollowed,
  name,
  pictureSrc,
  surname,
  text,
}: ProfileCardProps) => (
  <Box $display="flex" $alignItems="flex-start" $gap={Theme.setSpace(16)}>
    <Avatar avatar={{ src: pictureSrc, name }} />
    <Box
      $display="flex"
      $justifyContent="center"
      $alignItems="flex-start"
      $flexDirection="column"
    >
      <Box>
        <Text fontWeight="bold" $noOfLines={1}>{`${name} ${surname}`}</Text>
        <Text fontWeight="regular" fontSize="small" $noOfLines={2}>
          {text}
        </Text>
      </Box>
    </Box>
    <Box $ml="auto">
      <Button
        $variant={isFollowed ? 'destructive' : 'secondary'}
        onClick={() => console.log(`Clicked row`)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Box>
  </Box>
);

export default ProfileCard;
