import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/about';



const App = () => {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        
      </Routes>
    </div>
  );
};

export default App;