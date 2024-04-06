import React from 'react';

const Button = ({ label, color, imageUrl, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="Button Icon" />}
      {label}
    </button>
  );
};

export default Button;
