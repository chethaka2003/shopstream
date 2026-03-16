import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CubeProvider } from '@cubejs-client/react';
import cubeApi from './cube';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CubeProvider cubeApi={cubeApi}>
      <App />
    </CubeProvider>
  </React.StrictMode>
);