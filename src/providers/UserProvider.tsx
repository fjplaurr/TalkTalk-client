import React, { useState, useMemo } from 'react';
import { User } from '../interfaces';

export type ContextValue = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  accessToken?: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const userProviderDefaultValue: ContextValue = {
  user: undefined,
  setUser: () => {},
  accessToken: '',
  setAccessToken: () => {},
};

const UserProviderContext = React.createContext<ContextValue>(
  userProviderDefaultValue,
);

type UserProviderProps = {
  children: React.ReactNode;
  initialValue?: ContextValue;
};

const UserProvider = ({ children, initialValue }: UserProviderProps) => {
  const [user, setUser] = useState<User | undefined>(initialValue?.user);
  const [accessToken, setAccessToken] = useState<string | undefined>(
    initialValue?.accessToken,
  );

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
