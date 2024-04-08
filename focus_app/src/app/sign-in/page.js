'use client'
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import LoginScreen from '../components/LoginScreen';
import styles from './page.css'
import Profile from '../components/Profile';
import ProfilePage from '../components/ProfilePage';

export default function Home() {
  // Adds a class to the body element when the component mounts
  useEffect(() => {
    document.body.classList.add('centered-page');
    return () => {
      document.body.classList.remove('centered-page');
    };
  }, []);

  return (
    <div className={styles.container}>
      <LoginScreen />
    </div>
  );
};
