import React from "react";
import styles from "./AddItem.css";

export const AddItem = () => {
  return (
    <div>
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


