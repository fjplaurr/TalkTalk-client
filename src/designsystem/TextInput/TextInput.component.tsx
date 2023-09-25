import React from 'react';
import styles from './TextInput.module.css';
import { SearchIcon } from '../Icons';

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  width?: `${number}px`;
  errorMessage?: string;
  showSearchIcon?: boolean;
};

const TextInput = React.forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      type,
      placeholder,
      width,
      errorMessage,
      showSearchIcon,
    }: TextInputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <>
      <div
        className={styles['input-container']}
        style={width ? { width } : undefined}
      >
        {showSearchIcon && (
          <div className={styles['icon-container']}>
            <SearchIcon />
          </div>
        )}
        <input
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`${styles['input-base']} ${
            errorMessage ? styles['input-invalid'] : ''
          } ${showSearchIcon ? styles['input-has-icon'] : ''}`}
        />
      </div>
      {errorMessage && (
        <span className={styles['error-message']}>{errorMessage}</span>
      )}
    </>
  ),
);

export default TextInput;
