import React from 'react';
import { User } from '../../../../../../interfaces';
import styles from './ImagePicker.module.css';
import { Button, Theme, Box, Avatar } from '../../../../../../designsystem';

type ImagePickerProps = {
  pictureRef: React.RefObject<HTMLInputElement>;
  handleChangePicture: () => void;
  profileImage?: User['pictureSrc'];
  user?: User;
};

const ImagePicker = ({
  pictureRef,
  handleChangePicture,
  profileImage,
  user,
}: ImagePickerProps) => (
  <>
    <Box $display="flex" $gap={Theme.setSpace(12)}>
      <Avatar
        avatar={
          user && profileImage
            ? { src: profileImage, name: user.firstName }
            : undefined
        }
      />
      <Button
        type="button"
        $variant="secondary"
        onClick={() => pictureRef?.current?.click()}
      >
        Change avatar
      </Button>
    </Box>
    <input
      className={styles.hiddenInput}
      accept=".png, .jpg, .jpeg"
      type="file"
      ref={pictureRef}
      onChange={handleChangePicture}
    />
  </>
);

export default ImagePicker;
