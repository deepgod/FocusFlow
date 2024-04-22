import React, { useState, useEffect } from 'react';
import ButtonList from './ButtonList';
import StickyNote from './StickyNote';
import AddItem from './AddItem';
import styles from './MainContent.module.css';
import axios from 'axios';

export default function MainContent() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [selectedItemContent, setSelectedItemContent] = useState(null);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/notes');
      const items = response.data;
      const mappedButtons = items.map(item => ({
        id: item._id,
        label: item.title,
        imageUrl: item.url,
        content: item.content
      }));
      setButtons(mappedButtons);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSelectItem = (itemContent) => {
    setSelectedItemContent(itemContent);
  };

  const handleAddButton = async (newButton) => {
    try {
      setButtons([newButton, ...buttons]);
      setShowAddItem(false);
      setSelectedItemContent(newButton.content);
      await fetchItems();
    } catch (error) {
      console.error('Error adding new item:', error);
    }
  };
  

  return (
    <div className={styles.mainContent}>
      <div className={styles.card}>
        <ButtonList buttons={buttons} onSelectItem={handleSelectItem} onAddItemClick={() => setShowAddItem(true)} />
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
