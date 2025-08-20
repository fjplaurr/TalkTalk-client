import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authentication from './containers/Authentication';
import Home from './containers/Home';
import { UserProvider } from './providers/UserProvider';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Authentication />,
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
