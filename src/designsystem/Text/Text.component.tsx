import React from 'react';
import styled, { css } from 'styled-components';
import Themes, { ColorKeys } from '../themes';

type TextProps = {
  fontSize?: 'small' | 'regular' | 'large' | 'extralarge' | 'extraextralarge';
  fontWeight?: 'regular' | 'semibold' | 'bold';
  as?: Extract<keyof JSX.IntrinsicElements, 'p' | 'span' | 'h1' | 'h2' | 'h3'>;
  $noOfLines?: number;
  color?: ColorKeys;
  textAlign?: React.CSSProperties['textAlign'];
} & { style?: React.CSSProperties };

const smallFontSize = css`
  font-size: ${Themes.fontSizes.small};
  line-height: ${Themes.lineHeights.small};
`;

const regularFontSize = css`
  font-size: ${Themes.fontSizes.regular};
  line-height: ${Themes.lineHeights.regular};
`;

const largeFontSize = css`
  font-size: ${Themes.fontSizes.large};
  line-height: ${Themes.lineHeights.large};
`;

const extraLargeFontSize = css`
  font-size: ${Themes.fontSizes.extralarge};
  line-height: ${Themes.lineHeights.extralarge};
`;

const extraExtraLargeFontSize = css`
  font-size: ${Themes.fontSizes.extraextralarge};
  line-height: ${Themes.lineHeights.extraextralarge};
`;

const getTruncatedText = ($noOfLines: number) => css`
  overflow: hidden;
  display: -webkit-box;
  line-clamp: ${$noOfLines};
  -webkit-line-clamp: ${$noOfLines};
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

const Text = styled.p<TextProps>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case 'small':
        return smallFontSize;
      case 'regular':
        return regularFontSize;
      case 'large':
        return largeFontSize;
      case 'extralarge':
        return extraLargeFontSize;
      case 'extraextralarge':
        return extraExtraLargeFontSize;
      default:
        return regularFontSize;
    }
  }}
  font-family: ${Themes.fontFamily};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? Themes.fontWeights[fontWeight] : 'regular'};
  ${({ $noOfLines }) => $noOfLines && getTruncatedText($noOfLines)};
  color: ${({ color }) => color && Themes.colors[color]};
  text-align: ${({ textAlign }) => textAlign};
`;

export default Text;
