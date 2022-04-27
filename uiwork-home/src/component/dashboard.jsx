import React from 'react';
// import DashboardHeader from '../global/dashboardHeader';
import '../styles/dashboard.css';
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className='container-Dashboard'>
        <div className='side-navbar'>

          <div className='searchBox'>
            <input type='search' placeholder='Search' />
            <FaPlus className='search-plus' />
          </div>
          <div className='sideData'>
            <div className='sideData-1'>
              <p>TEL Invoice</p>
              <span>$2020.00</span>
            </div>
            <div className='sideData-1'>
              <p>TEL LD Invoice</p>
              <span>$3480.00</span>
            </div>
            <div className='sideData-1'>
              <p>TEL Order</p>
              <span>$3172.00</span>
            </div>
            <div className='sideData-1'>
              <p>NVT Invoice</p>
              <span>$1980.55</span>
            </div>
            <div className='sideData-1'>
              <p>SIMO Invoice</p>
              <span>$1170.15</span>
            </div>
            <div className='sideData-1'>
              <p>APL Invoice</p>
              <span>$686.00</span>
            </div>
            <div className='sideData-1'>
              <p>APL Invoice</p>
              <span>$11238.58</span>
            </div>
            <div className='sideData-1'>
              <p>APL Order</p>
              <span>$8547.00</span>
            </div>
            <div className='sideData-1'>
              <p>SMS Order</p>
              <span>$25695.00</span>
            </div>
            <div className='sideData-1'>
              <p>Inter AU Invoice</p>
              <span>$8547.00</span>
            </div>
            <div className='sideData-1'>
              <p>ACL Order</p>
              <span>$25945.00</span>
            </div>
            <div className='sideData-1'>
              <p>SPX Order</p>
              <span>$3395.00</span>
            </div>
          </div>

        </div>
        <div className='dashboard-data'>
          <h2>Trading entities</h2>
          <div className='dashboard-data-information'>
            <p>22 Entities</p>
            <p>10 Per Page</p>
            <span><FaPlus className='faolus-entites' /> New Entities</span>
            <span>Select</span>
          </div>

          <div className='dashboard-filter'>
            {/* <input type='search' placeholder='Search' />
              <span>Abbr.</span> */}
            <table>
              <tr>
                <th><input type='search' placeholder='Search' /></th>
                <th><span>Abbr.</span></th>
                <th>
                  <select>
                    <option>Parent</option>
                    <option>Individual</option>
                    <option>Subsidary</option>
                  </select>
                </th>
                <th><input type='search' placeholder='Search' /></th>
                <th>
                  <select>
                    <option>Indian</option>
                    <option>US</option>
                    <option>Canada</option>
                  </select>
                </th>
                <th>
                  <select>
                    <option>Unpaid</option>
                    <option>Sent</option>
                    <option>Recieved</option>
                  </select>
                </th>
              </tr>

              <tr>
                <td>Telio LTD</td>
                <td>Tel</td>
                <td>Parent</td>
                <td></td>
                <td>Los Angela, US</td>
                <td>Unpaid</td>
              </tr>
              <tr>
                <td>Telio LTD</td>
                <td>Tel</td>
                <td>Parent</td>
                <td></td>
                <td>Los Angela, US</td>
                <td>Unpaid</td>
              </tr>
              <tr>
                <td>Telio LTD</td>
                <td>Tel</td>
                <td>Parent</td>
                <td></td>
                <td>Los Angela, US</td>
                <td>Unpaid</td>
              </tr>
              <tr>
                <td>Telio LTD</td>
                <td>Tel</td>
                <td>Parent</td>
                <td></td>
                <td>Los Angela, US</td>
                <td>Unpaid</td>
              </tr>
              <tr>
                <td>Telio LTD</td>
                <td>Tel</td>
                <td>Parent</td>
                <td></td>
                <td>Los Angela, US</td>
                <td>Unpaid</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;