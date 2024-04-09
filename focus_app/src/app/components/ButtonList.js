import React from "react";
import Button from "./Button";
import styles from "./ButtonList.module.css";

const ButtonList = ({ buttons }) => {
  return (
    <div className={styles.buttonList}>
      {buttons.map(button => (
        <Button
          key={button.id} 
          label={button.label} 
          color={button.color}
          onClick={button.onClick} 
          imageUrl={button.imageUrl}
        />
      ))}
    </div>
  );
};

export default ButtonList;
