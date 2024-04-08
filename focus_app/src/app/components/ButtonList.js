
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import styles from "./ButtonList.module.css";

const ButtonList = () => {
  const router = useRouter();
  const [buttons, setButtons] = useState([
    { id: 1, label: 'Add', color: '#00a82d', imageUrl: '/plus.svg', onClick: () => handlePathButtonClick('/create-item') },
    { id: 2, label: 'Home', imageUrl: './home.svg' },
  ]);

  const handlePathButtonClick = (path) => {
    router.push(path);
  };

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
