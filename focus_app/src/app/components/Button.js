import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, color, imageUrl, onClick }) => {
  return (
    <button className={styles.button} style={{ backgroundColor: color, width: '20%' }} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="Button Icon" style={{ height: '20px', width: 'auto' }} />}
      {label}
    </button>
  );
};

export default Button;
