import React from 'react';
import styles from './Box.module.css';

type BoxProps = {
  children: React.ReactNode;
  paddingTop: `${number}px`;
  paddingRight: `${number}px`;
  paddingBottom: `${number}px`;
  paddingLeft: `${number}px`;
  marginTop: `${number}px`;
  marginRight: `${number}px`;
  marginBottom: `${number}px`;
  marginLeft: `${number}px`;
};

const Box = React.forwardRef(
  ({
    children,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  }: BoxProps) => {
    const dynamicStyle = {
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
    };

    return (
      <div className={styles.box} style={dynamicStyle}>
        {children}
      </div>
    );
  },
);

export default Box;
