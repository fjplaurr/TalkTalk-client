import React from 'react';
import styled from 'styled-components';
import {
  TextInput,
  Button,
  Theme,
  Box,
  Text,
  Avatar,
  Popover,
} from '../../../../designsystem';

type EditProfileProps = { user?: object };

const SettingsContainer = styled(Box)`
  text-align: center;
  position: relative;
`;

const AvatarWrapper = styled(Box)`
  cursor: pointer;
`;

const EditProfile = ({ user }: EditProfileProps) => {
  const [openProfile, setOpenProfile] = React.useState(false);

  const popoverContent = (
    <>
      <Text fontSize="regular" fontWeight="bold">
        Edit Profile
      </Text>
      <Box $display="flex" $gap={Theme.setSpace(12)}>
        <Avatar />
        <Button
          $variant="secondary"
          onClick={() => console.log('change avatar')}
        >
          Change avatar
        </Button>
      </Box>
      <TextInput
        name="name"
        onChange={(event) => console.log(event.target.value)}
        type="text"
        placeholder="what"
      />
      <TextInput
        name="description"
        onChange={(event) => console.log(event.target.value)}
        type="text"
        placeholder="description"
      />
      <Button $variant="primary">Save</Button>
    </>
  );

  const handleClick = () => {
    setOpenProfile((o) => !o);
  };

  const popoverTrigger = (
    <>
      <AvatarWrapper onClick={handleClick}>
        <Avatar />
      </AvatarWrapper>
      <Text fontSize="small" fontWeight="regular">
        Me
      </Text>
    </>
  );

  return (
    <SettingsContainer>
      <Popover
        isOpen={openProfile}
        setIsOpen={setOpenProfile}
        popoverContent={popoverContent}
        popoverTrigger={popoverTrigger}
        $right={0}
        $width="25vw"
      />
    </SettingsContainer>
  );
};

export default EditProfile;
