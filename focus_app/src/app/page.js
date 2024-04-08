'use client'
import React from 'react';
import Navbar from './components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Welcome to FocusFlow</h1>
            <p className={styles.description}>
              Your ultimate note-taking app for staying organized, focused, and productive.
            </p>
            <a href="/home" className={styles.button}>
              Get Started
            </a>
          </div>
          <div className={styles.image}>
            <img src="/personimg.png" alt="Busy Person" />
          </div>
        </div>
      </header>
    </div>
  );
}
