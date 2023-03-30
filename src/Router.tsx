import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Board from './components/Board';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: ':status',
        element: <Board category="" filters={['']} filter="all" />,
        children: [
          {
            path: ':status',
            element: <Board category="" filters={['']} filter="all" />,
          },
        ],
      },
    ],
  },
]);
