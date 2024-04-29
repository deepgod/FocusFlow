import React from "react";
import Button from "./Button";
import styles from "./ButtonList.module.css";
import { useAuth } from "./authContext";

const ButtonList = ({ buttons, onSelectItem, onAddItemClick, onDeleteItem, onEditItem }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const handleButtonClick = (button) => {
    if (button.onClick) {
      button.onClick();
    }
    if (onSelectItem) {
      onSelectItem(button.content);
    }
  };

  return (
    (isLoggedIn ? (
      <div className={styles.buttonList}>
        <div key={0} onClick={onAddItemClick}>
          <Button label="Add" color="#00a82d" imageUrl="/plus.svg" />
        </div>
        {buttons.map(button => (
          <div key={button.id}>
            <Button
              label={button.label} 
              color={button.color}
              imageUrl={button.imageUrl}
              onClick={() => handleButtonClick(button)}
            />
            <button 
              className={styles.deleteButton} 
              onClick={() => onDeleteItem(button.id)}
            >
              <img src="/delete.svg"/>
            </button>
            <button 
              className={styles.editButton} 
              onClick={() => onEditItem(button)}
            >
              <img src="/edit.svg"/>
            </button>
          </div>
        ))}
      </div>
    ) : (
      <p>Please Sign-In to continue</p>
    ))
  );
};

export default ButtonList;
