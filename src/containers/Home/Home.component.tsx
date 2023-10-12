import React from 'react';
import { TextInput, Button, Text } from 'harmony-kit';
import styles from './Home.module.css';

const Home = () => (
  <>
    <div className={styles.container}>
      <Text>This is a template for React in Typescript</Text>
      <TextInput
        onChange={() => {}}
        name="aaaaaa"
        type="text"
        placeholder="whattt"
      />
      <Button variant="primary">Button</Button>
    </div>
    <p>fwfwwfwe</p>
  </>
);

export default Home;
