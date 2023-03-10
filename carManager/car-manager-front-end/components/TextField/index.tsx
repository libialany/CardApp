import React from 'react';
import styles from './TextField.module.css';

const TextField = ({ id, name, onChange }: any) => {
  return (
    <input
      type="text"
      id={id}
      name={id}
      value={name}
      required
      onChange={(e) => onChange(e.target.value)}
      className={styles.inputField}
    />
  );
};

export default TextField;
