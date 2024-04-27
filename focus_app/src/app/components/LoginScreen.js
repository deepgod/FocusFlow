import React, { useState } from 'react';
import styles from "./LoginScreen.module.css";
import { useAuth } from './authContext';
import { useRouter } from "next/navigation";
import axios from 'axios';  // Import Axios

const LoginScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      if (userData.password !== userData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Sign up logic with Axios
      try {
        const response = await axios.post('/api/users/signup', {
          username: userData.username,
          fullName: userData.fullName,
          email: userData.email,
          password: userData.password,
          confirmPassword: userData.confirmPassword
        });
        console.log('Signup Success:', response.data);
        setIsLoggedIn(true);
        router.push("/home");
      } catch (error) {
        console.error('Signup Error:', error);
        alert('Signup Failed!');
      }
    } else {
      // Sign in logic with Axios
      try {
        const response = await axios.post('/api/users/login', {
          username: userData.username,
          password: userData.password
        });
        console.log('Login Success:', response.data);
        setIsLoggedIn(true);
        router.push("/home");
      } catch (error) {
        console.error('Login Error:', error.response.data);
        alert('Login Failed!');
      }
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <img src="./ff_logo.png" alt="FocusFlow Logo" className={styles.logo} />
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      </div>
      <div className={styles.input_section}>
        <form onSubmit={handleSubmit}>
          {isSignUp && <input type="text" name="fullName" value={userData.fullName} onChange={handleInputChange} placeholder="Full Name" required />}
          {isSignUp && <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Email Address" required />}
          <input type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="Username" required />
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="Password" required />
          {isSignUp && <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" required />}
          <button type="submit" className={styles.submitButton}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          <button type="button" onClick={toggleForm} className={styles.toggleForm}>
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
