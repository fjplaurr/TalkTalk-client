import * as React from 'react';
import styled from 'styled-components';
import themes from '../../themes';

const StyledSvg = styled.svg`
  width: calc(${themes.minimumSpacing} * 6);
  height: calc(${themes.minimumSpacing} * 6);
`;

const StyledPath = styled.path`
  stroke: ${themes.colors.midBlack};
`;

const Search = () => (
  <StyledSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
    <StyledPath
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
    />
  </StyledSvg>
);

export default Search;
