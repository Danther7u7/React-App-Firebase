import './index.css';
import { CarritoProvider } from './context/CartContext';
import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);