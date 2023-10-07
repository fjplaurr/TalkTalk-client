import React from 'react';
import styles from './Avatar.module.css';

type AvatarProps = {
  avatar?: {
    src: string;
    name: string;
  };
};

const Avatar = ({ avatar }: AvatarProps) => (
  <div className={styles.wrapper}>
    {avatar && (
      <img
        className={styles.img}
        src={avatar.src}
        alt={`Avatar of ${avatar?.name}`}
      />
    )}
  </div>
);

export default Avatar;
