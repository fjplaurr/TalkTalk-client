import React from 'react';
import styled from 'styled-components';
import { Box, Avatar, Text, Button } from '..';
import Themes from '../themes';

type ProfileCardProps = {
  isFollowed: boolean;
  pictureSrc: string;
  name: string;
  surname: string;
  text: string;
  onFollowClick: () => void;
};

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${Themes.setSpace(8)};
  @media (min-width: 40rem) {
    gap: ${Themes.setSpace(16)};
  }
`;

const AvatarWrapper = styled.div`
  display: none;
  @media (min-width: 40rem) {
    display: flex;
  }
`;

const ProfileCard = ({
  isFollowed,
  name,
  pictureSrc,
  surname,
  text,
  onFollowClick,
}: ProfileCardProps) => (
  <StyledContainer>
    <AvatarWrapper>
      <Avatar avatar={{ src: pictureSrc, name }} />
    </AvatarWrapper>
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
        onClick={onFollowClick}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Box>
  </StyledContainer>
);

export default ProfileCard;
