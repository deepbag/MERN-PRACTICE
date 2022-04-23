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
            location.pathname === '/' ? <Header /> : <DashboardHeader />
          }
          {
            location.pathname === '/' ? (
              <div className='container-route-mainpage'>
                <Routes>
                  <Route path='/' exact element={<MainPage />} />
                  <Route path='/account' exact element={<Account />} />
                  <Route path='/dashboard' exact element={<Dashboard />} />
                </Routes>
              </div>
            ) : (
              <div className='container-route-dashboard'>
                <Routes>
                  <Route path='/dashboard' exact element={<Dashboard />} />
                  <Route path='/account' exact element={<Account />} />
                </Routes>
              </div>
            )
          }
          {
            location.pathname === '/' ? <Footer /> : null
          }

        </div>
    </>
  )
}

export default Routing;