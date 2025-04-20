import React from 'react';
import * as styles from './styles.module.css';

function InputWTitle({
  placeholder,
  title,
  helperText,
  value,
  onChange,
  type,
  name,
  multiline = false,
  disabled=false
},...props) {
  return (
    <div className={styles.InputWTitleContainer}>
      <div className={styles.title}>{title}</div>
      {!multiline ? (
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          type={type}
          name={name}
          className={styles.input}
          disabled={disabled}
        
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          type={type}
          name={name}
          className={styles.multilineInput}
          disabled={disabled}
        />
      )}
    </div>
  );
}

export default InputWTitle;
