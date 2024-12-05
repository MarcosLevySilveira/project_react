import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, for styling
import App from './app'; // Main component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure you have an element with id "root" in your index.html
);

reportWebVitals(); // Optional
