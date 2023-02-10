import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ToDos from './components/ToDos';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'active',
        element: <ToDos />,
      },
      {
        path: 'completed',
        element: <ToDos />,
      },
    ],
  },
]);
