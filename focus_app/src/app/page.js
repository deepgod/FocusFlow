'use client'
import React from 'react';
import { Navbar } from './components/Navbar';
import styles from './page.module.css';
import { LoginScreen } from './components/LoginScreen';
import { AddItem } from './components/AddItem';

export default function Home() {
  return (
    <div> 
      <Navbar />
      <h1>Test2</h1>
      <LoginScreen />
      <h1> AddItem Page</h1>
      <AddItem />
    </div>
  );
}
