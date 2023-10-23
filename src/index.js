import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageProvider } from './Context/PageContext';
import { LoginContextProvider } from './Context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageProvider>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </PageProvider>
);


