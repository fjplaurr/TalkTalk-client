import * as React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button' | 'reset';
};

const Button = ({ text, onClick, type }: ButtonProps) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default React.memo(Button);
