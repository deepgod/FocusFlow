import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const ButtonList = () => {
  const router = useRouter();
  const [buttons, setButtons] = useState([
    { id: 1, label: 'Add', color: 'white', imageUrl: '/x_pic.svg', onClick: () => handlePathButtonClick('/create-item') },
    { id: 2, label: 'Home', color: 'white', onClick: () => console.log('Home button clicked') },
  ]);

  const handlePathButtonClick = (path) => {
    router.push(path);
  };

  return (
    <div>
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
