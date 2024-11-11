import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Componentes/Layout/layout';
import Home from './Componentes/Outlet/Home';
import User from './Componentes/Outlet/User';
import Login from './Componentes/Outlet/Login';
import Registration from './Componentes/Outlet/Registration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/User',
        element: <User></User>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Registration',
        element: <Registration></Registration>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
