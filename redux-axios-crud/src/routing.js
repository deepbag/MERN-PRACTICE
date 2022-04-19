import React from 'react';
import './styles/routing.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/routing.css';
import Users from './component/users';
import Header from './component/header';
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
                <Route path='/create' exact element={<Add />} />
                <Route path='/edit/:id' exact element={<Edit />} />
    
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </>
  );
}

export default Routing;
