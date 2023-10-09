import React from 'react';
import styles from './Home.module.css';
import Button from '../../designsystem/Button';
import Text from '../../designsystem/Text';
import TextInput from '../../designsystem/TextInput';

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
