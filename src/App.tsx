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
      element: (
        <UserProvider>
          <Home user={user} setUser={setUser} accessToken={accessToken} />
        </UserProvider>
      ),
    },
    {
      path: '/login',
      element: (
        <UserProvider>
          <Login setUser={setUser} setAccessToken={setAccessToken} />
        </UserProvider>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
