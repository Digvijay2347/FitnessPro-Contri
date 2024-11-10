import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Make sure this path is correct and imports the styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);