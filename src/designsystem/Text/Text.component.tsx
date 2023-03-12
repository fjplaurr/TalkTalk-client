import React from 'react';
import styles from './Text.module.css';

type TextProps = {
  fontSize?: 'small' | 'regular' | 'large' | 'extralarge';
  fontWeight?: 'regular' | 'semibold' | 'bold';
  children: React.ReactNode;
  as?: Extract<keyof JSX.IntrinsicElements, 'p' | 'span' | 'h1' | 'h2' | 'h3'>;
};

const Text = ({
  fontSize = 'regular',
  fontWeight = 'regular',
  as = 'p',
  children,
}: TextProps) => {
  const Tag = as;

  const classNames = [
    styles.base,
    styles[`size-${fontSize}`],
    styles[`weight-${fontWeight}`],
  ];

  return <Tag className={classNames.join(' ')}>{children}</Tag>;
};

export default Text;
