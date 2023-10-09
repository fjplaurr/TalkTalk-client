import React from 'react';
import styles from '../themes.module.css';

type TextProps = {
  fontSize?: 'small' | 'regular' | 'large' | 'extralarge';
  fontWeight?: 'regular' | 'semibold' | 'bold';
  children: React.ReactNode;
  as?: Extract<keyof JSX.IntrinsicElements, 'p' | 'span' | 'h1' | 'h2' | 'h3'>;
  truncated?: boolean;
};

type TruncatedTextCssProperties = {
  [key in keyof React.CSSProperties]: React.CSSProperties[key];
};

const Text = ({
  fontSize = 'regular',
  fontWeight = 'regular',
  as = 'p',
  children,
  truncated = false,
}: TextProps) => {
  const Tag = as;

  const classNames = [
    styles[`font-size-${fontSize}`],
    styles[`font-weight-${fontWeight}`],
  ];

  const textTruncated: TruncatedTextCssProperties = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  };

  return (
    <Tag
      className={classNames.join(' ')}
      style={truncated ? textTruncated : undefined}
    >
      {children}
    </Tag>
  );
};

export default Text;
