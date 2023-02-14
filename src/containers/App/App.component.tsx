import React from 'react';
import styles from './App.module.scss';
import Button from '../../components/Button';

const App = () => (
  <div className={styles.container}>
    <header>template-repository</header>
    <h1 className={styles.title}>This is a template for React in Typescript</h1>
    <Button text="Play" />
  </div>
);

export default App;
