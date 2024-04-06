// MainContent.js
import React from 'react';
import ButtonList from './ButtonList';
import StickyNote from './StickyNote';
import styles from './MainContent.module.css';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.card}>
        <ButtonList />
      </div>
      <div className={styles.content}>
        <StickyNote />
      </div>
    </div>
  );
}
