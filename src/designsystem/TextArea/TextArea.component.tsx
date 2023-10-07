import React from 'react';
import Button from '../Button';
import styles from './TextArea.module.css';

type TextAreaProps = {
  onSend: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

const TextArea = ({ onChange, onSend, placeholder }: TextAreaProps) => (
  <div className={styles.container}>
    <textarea
      className={styles.textarea}
      onChange={onChange}
      placeholder={placeholder}
    />
    <div className={styles.buttonWrapper}>
      <Button variant="primary" onClick={onSend}>
        Button
      </Button>
    </div>
  </div>
);

export default TextArea;
