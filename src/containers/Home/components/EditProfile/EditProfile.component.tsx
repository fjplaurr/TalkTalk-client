import React from 'react';
import styled from 'styled-components';
import {
  TextInput,
  Button,
  Box,
  Text,
  Avatar,
  Popover,
  Theme,
} from '../../../../designsystem';
import { User } from '../../../../interfaces';
import ImagePicker from './components/ImagePicker';
import { update, getSingle } from '../../../../endpoints/user';
import { updateAvatar } from '../../../../endpoints/me';

type EditProfileProps = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const SettingsContainer = styled(Box)`
  text-align: center;
  position: relative;
`;

const AvatarWrapper = styled(Box)`
  cursor: pointer;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Theme.setSpace(16)};
`;

const EditProfile = ({ user, setUser }: EditProfileProps) => {
  // State for the form
  const [name, setName] = React.useState(user?.firstName);
  const [surname, setSurname] = React.useState(user?.lastName);
  const [status, setStatus] = React.useState(user?.status);
  const [avatarFile, setAvatarFile] = React.useState<File | undefined>(
    undefined,
  );
  const [dirtyFields, setDirtyFields] = React.useState<string[]>([]);

  // State for the popover
  const [openProfile, setOpenProfile] = React.useState(false);

  // State for the picture preview
  const [localPictureSrc, setLocalPictureSrc] = React.useState(
    user?.pictureSrc,
  );

  // Ref for the input to select picture
  const pictureRef = React.useRef<HTMLInputElement>(null);

  const handleChangePicture = () => {
    const file: File = pictureRef?.current?.files![0]!;

    // create an url and save it locally. This is to show the picture before uploading it to the server
    const pictureLocalUrl = URL.createObjectURL(file);
    setLocalPictureSrc(pictureLocalUrl);
    setAvatarFile(file);
    setDirtyFields((fields) => [...fields, 'avatarFile']);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // build a payload with the fields that have been changed by looking at the dirtyFields
    const userFieldsPayload = {
      ...(dirtyFields.includes('name') && { firstName: name }),
      ...(dirtyFields.includes('surname') && { lastName: surname }),
      ...(dirtyFields.includes('status') && { status }),
    };

    // update the avatar and the rest of properties of the user in parallel
    const shouldUpdateAvatar = dirtyFields.includes('avatarFile');
    const shouldUpdateUser = ['name', 'surname', 'status'].some((field) =>
      dirtyFields.includes(field),
    );
    const promises = Promise.all([
      shouldUpdateAvatar && updateAvatar(avatarFile!),
      shouldUpdateUser && update(user!._id, userFieldsPayload),
    ]);

    // once the promises are resolved, get the user from the api, and close the popover
    promises.then(() => {
      setOpenProfile(false);
      getSingle(user!._id).then((u) => {
        setUser(u);
      });
    });
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setDirtyFields((fields) => [...fields, 'name']);
  };

  const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
    setDirtyFields((fields) => [...fields, 'surname']);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
    setDirtyFields((fields) => [...fields, 'status']);
  };

  const popoverContent = (
    <StyledForm onSubmit={handleSubmit}>
      <Text fontSize="regular" fontWeight="bold">
        Edit Profile
      </Text>
      <ImagePicker
        profileImage={localPictureSrc}
        handleChangePicture={handleChangePicture}
        pictureRef={pictureRef}
        user={user}
      />
      <TextInput
        name="name"
        onChange={handleChangeName}
        type="text"
        placeholder="Name"
        value={name}
      />
      <TextInput
        name="surname"
        onChange={handleChangeSurname}
        type="text"
        placeholder="Surname"
        value={surname}
      />
      <TextInput
        name="status"
        onChange={handleChangeStatus}
        type="text"
        placeholder="Status"
        value={status}
      />
      <Button type="submit" $variant="primary">
        Save
      </Button>
    </StyledForm>
  );

  const handleClick = () => {
    setOpenProfile((o) => !o);
  };

  const popoverTrigger = (
    <>
      <AvatarWrapper onClick={handleClick}>
        <Avatar
          avatar={
            user ? { src: user.pictureSrc, name: user.firstName } : undefined
          }
        />
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
