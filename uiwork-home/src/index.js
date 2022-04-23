import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Routing from './routing';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </BrowserRouter>
);
