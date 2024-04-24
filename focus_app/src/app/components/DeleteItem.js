
import React from 'react';
import styles from './DeleteItem.module.css';
import axios from 'axios';


const DeleteItem = ({ onDelete, onCancel }) => {
  return (
    <div className={styles.deleteItemContainer}>
      <p>Are you sure you want to delete this item?</p>
      <div className={styles.buttonGroup}>
        <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
        <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteItem;
