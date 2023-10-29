import styled from 'styled-components';
import Themes, { ColorKeys } from '../themes';
import { PaddingsShortcuts, MarginsShortcuts } from '../types';

export type BoxProps = {
  $backgroundColor?: ColorKeys;
  $width?: React.CSSProperties['width'];
  $border?: React.CSSProperties['border'];
  $borderRadius?: React.CSSProperties['borderRadius'];
  $flexDirection?: React.CSSProperties['flexDirection'];
  $justifyContent?: React.CSSProperties['justifyContent'];
  $alignItems?: React.CSSProperties['alignItems'];
  $gap?: React.CSSProperties['gap'];
  $flexWrap?: React.CSSProperties['flexWrap'];
  $flexBasis?: React.CSSProperties['flexBasis'];
  $flexGrow?: React.CSSProperties['flexGrow'];
  $flex?: React.CSSProperties['flex'];
  $display?: React.CSSProperties['display'];
  $position?: React.CSSProperties['position'];
  $top?: React.CSSProperties['top'];
  $right?: React.CSSProperties['right'];
  $bottom?: React.CSSProperties['bottom'];
  $left?: React.CSSProperties['left'];
  $zIndex?: React.CSSProperties['zIndex'];
} & PaddingsShortcuts &
  MarginsShortcuts;

const Box = styled.div<BoxProps>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor && Themes.colors[$backgroundColor]};
  padding-top: ${({ $pt }) => $pt};
  padding-right: ${({ $pr }) => $pr};
  padding-bottom: ${({ $pb }) => $pb};
  padding-left: ${({ $pl }) => $pl};
  margin-top: ${({ $mt }) => $mt};
  margin-right: ${({ $mr }) => $mr};
  margin-bottom: ${({ $mb }) => $mb};
  margin-left: ${({ $ml }) => $ml};
  width: ${({ $width }) => $width};
  border: ${({ $border }) => $border};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  display: ${({ $display }) => $display};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex: ${({ $flex }) => $flex};
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  z-index: ${({ $zIndex }) => $zIndex};
`;

export default Box;
