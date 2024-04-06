'use client'
import React from 'react';
import Navbar from './components/Navbar';
import styles from './page.module.css';
import LoginScreen from './components/LoginScreen';
import AddItem from './components/AddItem';
import ButtonList from './components/ButtonList';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <div> 
      <Navbar />
      <MainContent />
    </div>
  );
}
