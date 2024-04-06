'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import AddItem from '../components/AddItem';

export default function Home() {
  return (
    <div> 
      <Navbar />
      <h1> AddItem Page</h1>
      <AddItem />
    </div>
  );
}
