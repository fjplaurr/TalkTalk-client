import React from 'react';
import styles from './Box.module.css';

type BoxProps = Partial<{
  children: React.ReactNode;
  pt: `${number}px`;
  pr: `${number}px`;
  pb: `${number}px`;
  pl: `${number}px`;
  mt: `${number}px`;
  mr: `${number}px`;
  mb: `${number}px`;
  ml: `${number}px`;
}> &
  Pick<
    React.CSSProperties,
    'display' | 'justifyContent' | 'alignItems' | 'width' | 'height'
  >;

const Box = ({
  children,
  pt,
  pr,
  pb,
  pl,
  mt,
  mr,
  mb,
  ml,
  display,
  justifyContent,
  alignItems,
  width,
  height,
}: BoxProps) => {
  const dynamicStyle = {
    paddingTop: pt,
    paddingRight: pr,
    paddingBottom: pb,
    paddingLeft: pl,
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    display,
    justifyContent,
    alignItems,
    width,
    height,
  };
  return (
    <div className={styles.box} style={dynamicStyle}>
      {children}
    </div>
  );
};

export default Box;
