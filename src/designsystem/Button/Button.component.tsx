import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'destructive';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({ variant, onClick, children }: ButtonProps) => (
  <button className={`${styles.base} ${styles[variant]}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
