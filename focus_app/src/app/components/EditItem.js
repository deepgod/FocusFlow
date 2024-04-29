import React, { useState } from 'react';
import styles from './EditItem.module.css';
import axios from 'axios';

const EditItem = ({ item, onSubmit, onCancel }) => {
  const [editedItem, setEditedItem] = useState(item);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, url, content } = editedItem;

    if (!title || !url || !content) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const updatedItem = {
        title: editedItem.title,
        url: editedItem.url,
        content: editedItem.content
      };

      await axios.put(`/api/notes/${item.id}`, updatedItem);
      console.log('Item updated successfully');

      // Call onSubmit with the editedItem
      onSubmit(updatedItem);

      setErrorMessage('');
    } catch (error) {
      console.error('Error updating item', error);
      setErrorMessage('Failed to update item. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
    if (errorMessage) setErrorMessage('');
  };

  return (
    <div className={styles.editItemContainer}>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="titleTextbox">Title:</label>
          <input 
            type="text" 
            id="titleTextbox" 
            name="title"
            className={styles.inputField}
            value={editedItem.title}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="urlTextbox">URL:</label>
          <input 
            type="text" 
            id="urlTextbox" 
            name="url"
            className={styles.inputField}
            value={editedItem.url}
            onChange={handleChange}
            placeholder="'home' 'dev' 'rocket' 'plus'"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contentTextarea">Content:</label>
          <textarea 
            id="contentTextarea"
            name="content"
            className={styles.textareaField}
            value={editedItem.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={`${styles.button} ${styles.updateButton}`}>Update</button>
          <button type="button" onClick={onCancel} className={`${styles.button} ${styles.cancelButton}`}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;

