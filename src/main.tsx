import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home/index.tsx';
import { MovieDetail } from './routes/MovieDetail/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movie',
        element: <MovieDetail />,
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
