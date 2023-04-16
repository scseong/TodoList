import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import { ToDosProvider } from './reducer/ToDosContext';
import { router } from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ToDosProvider>
      <RouterProvider router={router} />
    </ToDosProvider>
  </React.StrictMode>,
);
