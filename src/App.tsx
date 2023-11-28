import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import { User } from './interfaces';

const App = () => {
  const [user, setUser] = useState<User>();
  const [accessToken, setAccessToken] = useState<string>();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home user={user} setUser={setUser} accessToken={accessToken} />,
    },
    {
      path: '/login',
      element: <Login setUser={setUser} setAccessToken={setAccessToken} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
