import React from 'react';
import styles from './TextInput.module.css';

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  minLength?: number;
  labelTitle?: string;
};

const TextInput = ({
  onChange,
  value,
  type,
  placeholder,
  minLength,
  labelTitle,
}: TextInputProps) => (
  <>
    {labelTitle && (
      <label htmlFor={labelTitle} className={styles.label}>
        {labelTitle}:
      </label>
    )}
    <input
      className={styles.input}
      required
      onChange={onChange}
      value={value}
      type={type}
      minLength={minLength}
      id={labelTitle}
      placeholder={placeholder}
    />
  </>
);

export default TextInput;
