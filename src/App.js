import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import imageSlider from './components/imageSlider';
import { HashRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
      <Header/>
      <Routes>
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Detail/:id' element={<Detail/>}/>
      <Route path='/' element={<Home/>}/>
       

      

      </Routes>
      

      </HashRouter>
      
    </div>
  );
}

export default App;
