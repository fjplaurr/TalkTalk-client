import React from 'react';
import styled, { css } from 'styled-components';
import Themes from '../../../../../themes';

type TabProps = {
  $variant: 'default' | 'selected';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  className?: string;
};

const defaultStyles = css`
  font-weight: ${Themes.fontWeights.regular};
`;

const selectedStyles = css`
  font-weight: ${Themes.fontWeights.bold};

  &::after {
    display: block;
    content: '';
    background-color: ${Themes.colors.darkBlue};
    height: 2px;
    border-radius: var(--minimum-border-radius);
  }
`;

const StyledTab = styled.button<{ $variant: TabProps['$variant'] }>`
  font-size: ${Themes.fontSizes.regular};
  line-height: ${Themes.lineHeights.regular};
  font-weight: ${Themes.fontWeights.regular};
  cursor: pointer;
  background: transparent;
  border: none;

  &::before {
    display: block;
    content: attr(title);
    font-weight: ${Themes.fontWeights.bold};
    height: 0;
    visibility: hidden;
  }

  &:hover {
    font-weight: ${Themes.fontWeights.bold};
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'default':
        return defaultStyles;
      case 'selected':
        return selectedStyles;
      default:
        return defaultStyles;
    }
  }};
`;

const Tab = ({ $variant, onClick, title, className }: TabProps) => (
  <StyledTab
    $variant={$variant}
    title={title}
    onClick={onClick}
    className={className}
  >
    {title}
  </StyledTab>
);

export default Tab;
