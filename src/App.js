import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './pages/Cart';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';



function App() {
  const [searchValue, setSearchValue]= useState('')
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          
        </div>
      <div/>
    </div>
    </div>
  );
}
export default App;
