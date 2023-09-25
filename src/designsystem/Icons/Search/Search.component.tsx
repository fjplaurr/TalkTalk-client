import * as React from 'react';
import styles from './Search.module.css';

const Search = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none">
    <path
      className={styles.path}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
    />
  </svg>
);

export default Search;
