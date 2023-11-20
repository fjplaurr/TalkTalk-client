import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import { User } from './interfaces';

const App = () => {
  const [user, setUser] = useState<User>();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home user={user} setUser={setUser} />,
    },
    {
      path: '/login',
      element: <Login setUser={setUser} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
