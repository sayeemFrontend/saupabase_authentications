import { createContext, ReactElement, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }: { children: ReactElement }) {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
