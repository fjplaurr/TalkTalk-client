import React, { useEffect, useState } from 'react';
import { loadUser } from './helpers/localStorage';
import { getSingle } from './endpoints/user';

const Login = React.lazy(() => import('./containers/Login'));
const Home = React.lazy(() => import('./containers/Home'));

const parsedObject = loadUser();
const App = () => {
  const [user, setUser] = useState(parsedObject);
  const isLoggedIn = user!!;

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

  return (
    <React.Suspense fallback="Loading">
      {isLoggedIn ? <Home /> : <Login />}
    </React.Suspense>
  );
};

export default App;
