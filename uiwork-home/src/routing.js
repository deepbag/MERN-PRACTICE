import React from 'react';
import './styles/routing.css';
import { Header, MainPage, Footer, Account, Dashboard, DashboardHeader } from './global/filesExport';
import { Routes, Route, useLocation } from "react-router-dom";

const Routing = () => {

  // Get Router URL for Changing conditionally Header
  const location = useLocation();

  return (
    <>
        <div className='container-routing'>
          {
            location.pathname !== '/dashboard' ? <Header /> : <DashboardHeader />
          }
              <div className='container-route-mainpage'>
                <Routes>
                  <Route path='/' exact element={<MainPage />} />
                  <Route path='/account' exact element={<Account />} />
                  <Route path='/dashboard' exact element={<Dashboard />} />
                </Routes>
              </div>
          {
            location.pathname !== '/dashboard' ? <Footer /> : null
          }
        </div>
    </>
  )
}

export default Routing;