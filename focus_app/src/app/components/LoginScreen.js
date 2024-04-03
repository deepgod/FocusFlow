import React from 'react';
import styles from "./LoginScreen.module.css";

export const LoginScreen = () => {
  return (
    <div className={styles.container}>
      <div className="welcome">
        <img src="./ff_logo.png" alt="FocusFlow Logo" className="logo" />
        <h2>Sign In</h2>
      </div>
      <div className="form">
        <form action="#">
            <input type="text" name="username" id="username" placeholder="Username" required />
            <input type="password" name="password" id="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
  );
};