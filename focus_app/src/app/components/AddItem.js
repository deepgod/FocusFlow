import React, { useState } from "react";
import styles from './AddItem.module.css';

const AddItem = ({ onSubmit, onCancel }) => {
  const [newItem, setNewItem] = useState({
    title: "",
    url: "",
    content: ""
  });

  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks
    if (!newItem.title || !newItem.url || !newItem.content) {
      let missingFields = [];
      if (!newItem.title) missingFields.push('Title');
      if (!newItem.url) missingFields.push('URL');
      if (!newItem.content) missingFields.push('Content');
      setErrorMessage(`Please fill in the following field(s): ${missingFields.join(', ')}`);
      return; // Prevent form submission if validation fails
    }

    const newButton = {
      id: Math.random(),
      label: newItem.title,
      imageUrl: newItem.url,
      // Assuming content is also needed to be passed to onSubmit
      content: newItem.content, 
    };
    onSubmit(newButton);
    setNewItem({ title: "", url: "", content: "" }); // Reset form fields
    setErrorMessage(''); // Clear any error messages upon successful submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
    if (errorMessage) setErrorMessage(''); // Clear error message when the user starts to correct the input
  };

  return (
<div className={styles.addItemContainer}>
  {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Display error message if it exists */}
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
