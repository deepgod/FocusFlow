/*
import React from "react";
import styles from './AddItem.module.css';

const AddItem = () => {
  return (
    <div className="addItemContainer">
      <div>
        <label htmlFor="titleTextbox">Title:</label>
        <input type="text" id="titleTextbox" />
      </div>
      <div>
        <label htmlFor="urlTextbox">URL:</label>
        <input type="text" id="urlTextbox" />
      </div>
      <div>
        <label htmlFor="contentTextarea">Content:</label>
        <textarea rows="4" cols="50" id="contentTextarea"></textarea>
      </div>
      <button>Create</button>
    </div>  
  );
};
 export default AddItem;
 */

 import React, { useState } from "react";
import styles from './AddItem.module.css';

const AddItem = () => {
  const [newItem, setNewItem] = useState({
    title: "",
    url: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Item Data:", newItem);
    setNewItem({
      title: "",
      url: "",
      content: ""
    });
  };

  return (
    <div className="addItemContainer">
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
      </form>
    </div>  
  );
};

export default AddItem;
