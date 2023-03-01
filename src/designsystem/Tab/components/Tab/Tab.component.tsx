import React from 'react';
import styles from './Tab.module.css';

type TabProps = {
  variant: 'default' | 'selected';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
};

const Tab = ({ variant, onClick, title }: TabProps) => (
  <button
    title={title}
    className={`${styles.base} ${styles[variant]}`}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Tab;
