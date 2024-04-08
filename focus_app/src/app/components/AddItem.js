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

import React, { useState} from "react";
import styles from './AddItem.module.css';

const AddItem = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredURL, setEnteredURL] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const URLChangeHandler = (event) => {
    setEnteredURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the username input is empty
    if (enteredTitle.trim().length === 0) {
     // Optionally alert the user or set an error state here
      alert('Please enter a username.'); // Not recommended for production use, but okay for demonstration
      return; // Exit the function early if no username is provided
    }
    // Create user object from state
  const newTitle = {
    id: Math.random().toString(),
    title: enteredtitle,
    URL: enteredURL,
  };
     // Call the onAddUser function passed as a prop
  props.onAddUser(newUser);  
    setEnteredTitle('')
    setEnteredURL('') 
};

  return (
    <div className={styles.addItemContainer}>
      {/* Title component */}
      <div>
        <label htmlFor="titleTextbox">Title:</label>
        <input type="text" id="titleTextbox" />
      </div>

      {/* URL component */}
      <div>
        <label htmlFor="urlTextbox">URL:</label>
        <input type="text" id="urlTextbox" />
      </div>

      {/* Content component */}
      <div>
        <label htmlFor="contentTextarea">Content:</label>
        <textarea rows="4" cols="50" id="contentTextarea"></textarea>
      </div>
       {/* Create button */}
      <button>Create</button>
    </div>  
  );
};
 export default AddItem;
