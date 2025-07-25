import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import { UserProvider, useUser } from './providers/UserProvider';

const App = () => {
  const { user, setUser, accessToken, setAccessToken } = useUser();

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

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
