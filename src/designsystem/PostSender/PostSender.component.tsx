import React from 'react';
import Button from '../Button';
import styles from './PostSender.module.css';

type PostSenderProps = {
  onSend: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const PostSender = ({ onChange, onSend }: PostSenderProps) => (
  <div className={styles.container}>
    <textarea className={styles.textarea} onChange={onChange} />
    <div className={styles.buttonWrapper}>
      <Button variant="primary" onClick={onSend}>
        Button
      </Button>
    </div>
  </div>
);

export default PostSender;
