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

 import React from "react";
import styles from './AddItem.module.css';

const AddItem = ({ onCreate }) => {
  const handleCreate = () => {
    onCreate("Label to be displayed");
    // Add any additional functionality here
  };

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
      <button onClick={handleCreate}>Create</button>
    </div>  
  );
};

export default AddItem;
