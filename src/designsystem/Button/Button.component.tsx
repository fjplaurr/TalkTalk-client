import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'destructive';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  width?: React.CSSProperties['width'];
};

const Button = ({ variant, onClick, children, width }: ButtonProps) => (
  <button
    className={`${styles.base} ${styles[variant]}`}
    onClick={onClick}
    style={{ width }}
  >
    {children}
  </button>
);

export default Button;
