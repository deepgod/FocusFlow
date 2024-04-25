import React from 'react';
import styles from './DeleteItem.module.css';
import axios from 'axios';

const DeleteItem = ({ onDelete, onCancel }) => {
  const handleDelete = () => {
    // Call onDelete function when checkbox is clicked
    onDelete();
  };

  return (
    <div className={styles.deleteItemContainer}>
      <p>Are you sure you want to delete this item?</p>
      <div className={styles.buttonGroup}>
        {/* Use a checkbox instead of a button */}
        <input type="checkbox" onChange={handleDelete} className={styles.deleteCheckbox} />
        <label>Delete</label>
        <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteItem;

