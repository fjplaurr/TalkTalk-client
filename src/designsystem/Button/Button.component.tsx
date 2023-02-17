import * as React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  const { base, primary, destructive, secondary } = styles;

  return (
    <div>
      <button className={`${base} ${primary} `} onClick={onClick}>
        {children}
      </button>
      <button className={`${base} ${primary} ${secondary}`} onClick={onClick}>
        {children}
      </button>
      <button className={`${base} ${destructive}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
