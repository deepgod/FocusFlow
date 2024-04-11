import React, { useState } from 'react';
import ButtonList from './ButtonList';
import StickyNote from './StickyNote';
import AddItem from './AddItem';
import styles from './MainContent.module.css';
import { useRouter } from "next/navigation";

export default function MainContent() {
  const router = useRouter();
  const [showAddItem, setShowAddItem] = useState(false);
  
  const [buttons, setButtons] = useState([
    { id: 2, label: 'Home', imageUrl: './home.svg' },
    { id: 1, label: 'Add', color: '#00a82d', imageUrl: '/plus.svg', onClick: () => setShowAddItem(true) },
    { id: 3, label: 'UserDefi 1', imageUrl: '/ff_logo.png'}
  ]);

  const handleAddButton = (newButton) => {
    setButtons([...buttons, newButton]);
    setShowAddItem(false);
  };

  const handlePathButtonClick = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.card}>
        <ButtonList buttons={buttons} />
      </div>
      <div className={styles.content}>
        <StickyNote />
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
