import React from 'react';
import styles from './Home.module.css';
import Button from '../../designsystem/Button';

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>This is a template for React in Typescript</h1>
    <Button variant="primary">Button</Button>
  </div>
);

export default Home;
