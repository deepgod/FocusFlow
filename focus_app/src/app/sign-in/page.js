'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import LoginScreen from '../components/LoginScreen';

export default function Home() {
  return (
    <div> 
      <Navbar />
      <h1> Login</h1>
      <LoginScreen />
    </div>
  );
};
