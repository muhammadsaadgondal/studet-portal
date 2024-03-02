import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageProvider } from './Context/PageContext';
import { LoginContextProvider } from './Context/LoginContext';

import "./services/firebase";
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-q3pj52v430iomukd.us.auth0.com" // Replace with your Auth0 domain
  //   clientId="ENpCnXkMjluPb3mxGmsYAHMCsvYFAZU8" // Replace with your Auth0 client ID
  //   redirectUri={window.location.origin}
  // >
    <PageProvider>
      <AuthContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </AuthContextProvider>

    </PageProvider>
  // </Auth0Provider>

);


