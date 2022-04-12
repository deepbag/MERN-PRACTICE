import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './container/header';
import Users from './container/users';
import Create from './container/create';
import Update from './container/update';

const App = () => {
  return (
      <>
        <BrowserRouter>
          <div className='container'>
            <Header />

            <div className='container-content'>
              <Routes>
                <Route path='/' exact element={<Users />} />
                <Route path='/create' exact element={<Create />} />
                <Route path="/update/:id" exact element={<Update />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </>
  );
}

export default App;


