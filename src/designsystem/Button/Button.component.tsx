import React from 'react';
import styled, { css } from 'styled-components';
import Themes from '../themes';

type ButtonProps = {
  $variant: 'primary' | 'secondary' | 'destructive';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  $width?: React.CSSProperties['width'];
  type?: 'button' | 'submit' | 'reset';
};

const primaryStyles = css`
  border: none;
  color: ${Themes.colors.white};
  background-color: ${Themes.colors.midPink};

  &:hover {
    background-color: ${Themes.colors.darkPink};
  }
`;

const secondaryStyles = css`
  border: ${`1px solid ${Themes.colors.midGray}`};
  color: ${Themes.colors.darkBlue};
  background-color: ${Themes.colors.white};

  &:hover {
    background-color: ${Themes.colors.lightBlue};
    border-color: ${Themes.colors.darkBlue};
  }
`;

const destructiveStyles = css`
  border: 1px solid ${Themes.colors.midGray};
  background-color: ${Themes.colors.white};
  color: ${Themes.colors.darkRed};
  &:hover {
    background-color: ${Themes.colors.lightRed};
    border-color: ${Themes.colors.darkRed};
  }
`;

const StyledButton = styled.button<{
  $variant: ButtonProps['$variant'];
  $width?: ButtonProps['$width'];
}>`
  font-size: ${Themes.fontSizes.regular};
  line-height: ${Themes.lineHeights.regular};
  font-weight: ${Themes.fontWeights.bold};
  height: calc(${Themes.minimumSpacing} * 10);
  border-radius: calc(${Themes.minimumBorderRadius} * 12);
  cursor: pointer;
  padding-block: calc(${Themes.minimumSpacing} * 2);
  padding-inline: calc(${Themes.minimumSpacing} * 4);
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return primaryStyles;
      case 'secondary':
        return secondaryStyles;
      case 'destructive':
        return destructiveStyles;
      default:
        return primaryStyles;
    }
  }};
  width: ${({ $width }) => $width && $width};
  white-space: nowrap;
`;

const Button = ({ $variant, onClick, children, $width, type }: ButtonProps) => (
  <StyledButton
    $variant={$variant}
    onClick={onClick}
    $width={$width}
    type={type}
  >
    {children}
  </StyledButton>
);

export default Button;
