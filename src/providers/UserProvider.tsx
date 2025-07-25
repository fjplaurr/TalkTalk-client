import React, { useState, useMemo } from 'react';
import { User } from '../interfaces';

type ContextValue = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  accessToken?: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const UserProviderDefaultValue: ContextValue = {
  user: undefined,
  setUser: () => {},
  accessToken: '',
  setAccessToken: () => {},
};

const UserProviderContext = React.createContext(UserProviderDefaultValue);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [accessToken, setAccessToken] = useState<string>();

  const memoizedContextValue: ContextValue = useMemo(
    () => ({
      user,
      setUser,
      accessToken,
      setAccessToken,
    }),
    [user, setUser, accessToken, setAccessToken],
  );

  return (
    <UserProviderContext.Provider value={memoizedContextValue}>
      {children}
    </UserProviderContext.Provider>
  );
};

const useUser = () => React.useContext(UserProviderContext);

export { UserProvider, useUser };
