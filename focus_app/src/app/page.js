'use client'
import React from 'react';
import Navbar from './components/Navbar';
import styles from './page.module.css';
import LoginScreen from './components/LoginScreen';
import AddItem from './components/AddItem';
import ButtonList from './components/ButtonList';

export default function Home() {
  return (
    <div> 
      <Navbar />
      <h1>Homescreen</h1>
      <ButtonList />
    </div>
  );
}
