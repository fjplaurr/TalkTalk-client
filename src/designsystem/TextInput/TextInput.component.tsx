import React from 'react';
import styles from './TextInput.module.css';

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  labelTitle?: string;
};

const TextInput = React.forwardRef(
  (
    { onChange, onBlur, name, type, placeholder, labelTitle }: TextInputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <>
      {labelTitle && (
        <label htmlFor={labelTitle} className={styles.label}>
          {labelTitle}:
        </label>
      )}
      <input
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        id={labelTitle}
      />
    </>
  ),
);

export default TextInput;
