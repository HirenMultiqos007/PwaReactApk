// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from "./components/Footer"
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
        <Route element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;
