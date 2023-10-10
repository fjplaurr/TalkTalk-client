import React from 'react';
import styles from '../themes.module.css';

type TextProps = {
  fontSize?: 'small' | 'regular' | 'large' | 'extralarge';
  fontWeight?: 'regular' | 'semibold' | 'bold';
  children: React.ReactNode;
  as?: Extract<keyof JSX.IntrinsicElements, 'p' | 'span' | 'h1' | 'h2' | 'h3'>;
  noOfLines?: number;
};

type TruncatedTextCssProperties = {
  [key in keyof React.CSSProperties]: React.CSSProperties[key];
};

const Text = ({
  fontSize = 'regular',
  fontWeight = 'regular',
  as = 'p',
  children,
  noOfLines,
}: TextProps) => {
  const Tag = as;

  const classNames = [
    styles[`font-size-${fontSize}`],
    styles[`font-weight-${fontWeight}`],
  ];

  const maxNumberOfLines: TruncatedTextCssProperties = {
    overflow: 'hidden',
    display: '-webkit-box',
    lineClamp: noOfLines,
    WebkitLineClamp: noOfLines,
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-all',
  };

  return (
    <Tag
      className={classNames.join(' ')}
      style={noOfLines ? maxNumberOfLines : undefined}
    >
      {children}
    </Tag>
  );
};

export default Text;
