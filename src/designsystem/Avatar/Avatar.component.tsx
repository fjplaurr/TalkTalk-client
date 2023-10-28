import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons';
import themes from '../themes';

type AvatarProps = {
  avatar?: {
    src: string;
    name: string;
  };
};

const StyledWrapper = styled.div`
  height: calc(${themes.minimumSpacing} * 12);
  min-width: calc(${themes.minimumSpacing} * 12);
  max-width: calc(${themes.minimumSpacing} * 12);
  background-color: ${themes.colors.midGray};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Avatar = ({ avatar }: AvatarProps) => (
  <StyledWrapper>
    {avatar ? (
      <StyledImage src={avatar.src} alt={`Avatar of ${avatar?.name}`} />
    ) : (
      <Icons.UserIcon />
    )}
  </StyledWrapper>
);

export default Avatar;
