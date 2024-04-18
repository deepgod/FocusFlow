import React, { useState } from "react";
import styles from './AddItem.module.css';
import axios from 'axios';

const AddItem = ({ onSubmit, onCancel }) => {
  const initialNewItemState = {
    title: "",
    url: "",
    content: ""
  };

  const [newItem, setNewItem] = useState(initialNewItemState);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => { // Mark the function as async
    e.preventDefault();
    const { title, url, content } = newItem;

    if (!title || !url || !content) {
      const missingFields = ['Title', 'URL', 'Content'].filter(field => !newItem[field.toLowerCase()]);
      setErrorMessage(`Please fill in the following field(s): ${missingFields.join(', ')}`);
      return;
    }

    try {
      await axios.post('/api/notes', newItem); // Use correct API endpoint
      console.log('Note submitted successfully');
      onSubmit({ ...newItem }); // You may want to pass the newItem to onSubmit after it's successfully posted
      setNewItem(initialNewItemState);
      setErrorMessage('');
    } catch (e) {
      console.error('Error submitting note', e);
      setErrorMessage('Failed to submit note. Please try again.'); // Set error message if request fails
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
    if (errorMessage) setErrorMessage('');
  };

  return (
    <div className={styles.addItemContainer}>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="titleTextbox">Title:</label>
          <input 
            type="text" 
            id="titleTextbox" 
            name="title"
            className={styles.inputField}
            value={newItem.title}
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
            value={newItem.url}
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
            value={newItem.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={`${styles.button} ${styles.createButton}`}>Create</button>
          <button type="button" onClick={onCancel} className={`${styles.button} ${styles.cancelButton}`}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
