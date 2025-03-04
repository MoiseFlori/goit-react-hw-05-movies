import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const basename =
  process.env.NODE_ENV === 'production' ? '/trending-movies' : '';
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('Basename setat:', basename);

  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
