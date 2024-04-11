import React, { useState } from 'react';
import ButtonList from './ButtonList';
import StickyNote from './StickyNote';
import AddItem from './AddItem';
import styles from './MainContent.module.css';
import { useRouter } from "next/navigation";

export default function MainContent() {
  const router = useRouter();
  const [showAddItem, setShowAddItem] = useState(false);
  const [selectedItemContent, setSelectedItemContent] = useState(null);

  
  const [buttons, setButtons] = useState([
    { id: 2, label: 'Home', imageUrl: './home.svg' },
    { id: 1, label: 'Add', color: '#00a82d', imageUrl: '/plus.svg', onClick: () => setShowAddItem(true) },
    { id: 3, label: 'UserDefi 1', imageUrl: '/ff_logo.png'}
  ]);

  const handleSelectItem = (itemContent) => {
    setSelectedItemContent(itemContent);
  };


  const handleAddButton = (newButton) => {
    setButtons([...buttons, newButton]);
    setShowAddItem(false);
    setSelectedItemContent(newButton.content);

  };

  const handlePathButtonClick = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.card}>
        <ButtonList buttons={buttons} onSelectItem={handleSelectItem} />
      </div>
      <div className={styles.content}>
        {selectedItemContent ? selectedItemContent : <StickyNote />}
      </div>
      {showAddItem && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <AddItem onSubmit={handleAddButton} onCancel={() => setShowAddItem(false)} />
          </div>
        </div>
      )}
    </div>
  );
}