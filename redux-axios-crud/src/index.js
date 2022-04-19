import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './routing';
import Store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routing />
    </Provider>
  </React.StrictMode>
);
