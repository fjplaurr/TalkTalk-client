import React from 'react';
import styles from './Box.module.css';

type BoxProps = Partial<{
  children: React.ReactNode;
  pt: `${number}px`;
  pr: `${number}px`;
  pb: `${number}px`;
  pl: `${number}px`;
  mt: `${number}px` | 'auto';
  mr: `${number}px` | 'auto';
  mb: `${number}px` | 'auto';
  ml: `${number}px` | 'auto';
  noBorder: boolean;
}> &
  Pick<
    React.CSSProperties,
    | 'display'
    | 'justifyContent'
    | 'alignItems'
    | 'flexDirection'
    | 'width'
    | 'height'
    | 'gap'
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
  flexDirection,
  width,
  height,
  noBorder,
  gap,
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
    flexDirection,
    width,
    height,
    border: noBorder ? 'none' : undefined,
    gap,
  };

  return (
    <div className={styles.box} style={dynamicStyle}>
      {children}
    </div>
  );
};

export default Box;
