import React from 'react';
import styles from './TextInput.module.css';

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  labelTitle?: string;
  width?: `${number}px`;
};

const TextInput = React.forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      type,
      placeholder,
      labelTitle,
      width,
    }: TextInputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const dynamicStyle = width ? { width } : undefined;

    return (
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
          id={labelTitle}
          className={styles.input}
          style={dynamicStyle}
        />
      </>
    );
  },
);

export default TextInput;
