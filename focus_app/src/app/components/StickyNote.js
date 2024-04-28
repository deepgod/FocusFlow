
import React from 'react';
import styles from './StickyNote.module.css';

export default function StickyNote() {
  return (
    <div className={styles.note}>
      <p>Welcome to your FocusFlow!</p>
      <img src="/notetaking.jpeg" alt="Notetaking" className={styles.noteImage} />
    </div>
  );
}



