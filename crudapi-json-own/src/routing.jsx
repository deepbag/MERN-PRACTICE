import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/routing.css';
import Users from './component/users';
import Header from './component/header';
import View from './component/view';
import Add from './component/add';
import Edit from './component/edit';

const Routing = () => { 
  return (
      <>
        <BrowserRouter>
          <div className='container'>
            <Header />

            <div className='container-content'>
              <Routes>
                <Route path='/' exact element={<Users />} />
                <Route path='/view/:id' exact element={<View />} />
                <Route path='/edit/:id' exact element={<Edit />} />
                <Route path='/create' exact element={<Add />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </>
  );
}

export default Routing;
