import React, { useState } from "react";
import styles from './AddItem.module.css';

const AddItem = ({ onSubmit, onCancel }) => {
  const [newItem, setNewItem] = useState({
    title: "",
    url: "",
    content: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newButton = {
      id: Math.random(),
      label: newItem.title,
      imageUrl: newItem.url,
    };
    onSubmit(newButton);
    setNewItem({ title: "", url: "", content: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <div className={styles.addItemContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleTextbox">Title:</label>
          <input 
            type="text" 
            id="titleTextbox" 
            name="title"
            value={newItem.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="urlTextbox">URL:</label>
          <input 
            type="text" 
            id="urlTextbox" 
            name="url"
            value={newItem.url}
            onChange={handleChange}
            placeholder="'home' 'dev' 'rocket' 'plus'"
          />
        </div>
        <div>
          <label htmlFor="contentTextarea">Content:</label>
          <textarea 
            rows="4" 
            cols="50" 
            id="contentTextarea"
            name="content"
            value={newItem.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Create</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>  
  );
};

export default AddItem;
