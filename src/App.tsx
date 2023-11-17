import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loadUser } from './helpers/localStorage';
import { getSingle } from './endpoints/user';
import Login from './containers/Login';
import Home from './containers/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const parsedObject = loadUser();

const App = () => {
  const [user, setUser] = useState(parsedObject);
  const isLoggedIn = Boolean(user);

  // Reads token from local storage, fetches user from DB and sets it in global context
  useEffect(() => {
    const getUser = async () => {
      if (parsedObject?.token) {
        const userFromDB = await getSingle(parsedObject.id);
        setUser(userFromDB);
      }
    };
    getUser();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
