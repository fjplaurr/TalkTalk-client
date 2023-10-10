import React from 'react';
import Box from '../../designsystem/Box';
import Avatar from '../../designsystem/Avatar';
import Text from '../../designsystem/Text';
import Button from '../../designsystem/Button';

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
      <Box width="144px" noBorder>
        <Text fontWeight="bold" noOfLines={1}>{`${name} ${surname}`}</Text>
        <Text fontWeight="regular" fontSize="small" noOfLines={1}>
          {text}
        </Text>
      </Box>
    </Box>
    <Box ml="auto" noBorder>
      <Button
        width="98px"
        variant={isFollowed ? 'destructive' : 'secondary'}
        onClick={() => console.log(`Clicked row`)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Box>
  </Box>
);

export default ProfileCard;
