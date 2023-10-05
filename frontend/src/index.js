import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {GoogleOAuthProvider} from "@react-oauth/google";

const client_Id=process.env.REACT_APP_ClientId;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={client_Id}>
    <App />
  </GoogleOAuthProvider>
);