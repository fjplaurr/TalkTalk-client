import React from 'react';
import styles from './Home.module.css';
import Button from '../../designsystem/Button';

const Home = () => (
  <div className={styles.container}>
    <header>template-repository</header>
    <h1 className={styles.title}>This is a template for React in Typescript</h1>
    <Button>Button</Button>
  </div>
);

export default Home;
