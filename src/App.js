// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Banner />
      <Services />
      <Contact /> */}
      
      <Routes>
        <Route element={<Header/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
