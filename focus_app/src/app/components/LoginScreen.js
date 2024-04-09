import React from 'react';
import styles from "./LoginScreen.module.css";
import { useAuth } from './authContext';
import { useRouter } from "next/navigation";

const LoginScreen = () => {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleSignIn = () => {
    setIsLoggedIn(true);
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <img src="./ff_logo.png" alt="FocusFlow Logo" className={styles.logo} />
        <h2>Sign In</h2>
      </div>
      <div className={styles.input_section}>
        <form action="#">
            <input type="text" name="username" id="username" placeholder="Username" required />
            <input type="password" name="password" id="password" placeholder="Password" required />
            <button type="submit" onClick={handleSignIn} className={styles.submitButton}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;