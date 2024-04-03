'use client'
import React from 'react';
import { Navbar } from './components/Navbar';
import styles from './page.module.css';
import { LoginScreen } from './components/LoginScreen';

export default function Home() {
  return (
    <div> 
      <Navbar />
      <h1>Test2</h1>
      <LoginScreen />
    </div>
  );
}
