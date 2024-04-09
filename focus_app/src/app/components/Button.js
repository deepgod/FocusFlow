import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, color, imageUrl, onClick }) => {
  const defaultImageUrl = './x_pic.svg';

  return (
    <button className={styles.button} style={{ backgroundColor: color }} onClick={onClick}>
      <img 
        src={imageUrl || defaultImageUrl}
        alt="Button Icon" 
        style={{ height: '20px', width: 'auto' }} 
        onError={(e) => { e.target.src = defaultImageUrl; }}
      />
      {label}
    </button>
  );
};

export default Button;
