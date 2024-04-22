import React from "react";
import Button from "./Button";
import styles from "./ButtonList.module.css";

const ButtonList = ({ buttons, onSelectItem, onAddItemClick }) => {
  const handleButtonClick = (button) => {
    if (button.onClick) {
      button.onClick();
    }
    if (onSelectItem) {
      onSelectItem(button.content);
    }
  };

  return (
    <div className={styles.buttonList}>
      <div key={0} onClick={onAddItemClick}>
        <Button
          label="Add"
          color="#00a82d"
          imageUrl="/plus.svg"
        />
      </div>
      {buttons.map(button => (
        <div key={button.id} onClick={() => handleButtonClick(button)}>
          <Button
            label={button.label} 
            color={button.color}
            imageUrl={button.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
