import React from 'react';
import styles from './Tab.module.css';

type TabProps = {
  variant: 'default' | 'selected';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Tab = ({ variant, onClick, children }: TabProps) => (
  <button className={`${styles.base} ${styles[variant]}`} onClick={onClick}>
    {children}
  </button>
);

export default Tab;
