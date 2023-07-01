import { createContext, ReactNode, useContext } from "react";

interface SessionUserProviderProps {
  children: ReactNode;
}

interface SessionUserContextData {
  user: object;
}

const SessionUserContext = createContext<SessionUserContextData>(
  {} as SessionUserContextData
);

export function SessionUserProvider({ children }: SessionUserProviderProps) {
  const user = {};

  return (
    <SessionUserContext.Provider value={{ user }}>
      {children}
    </SessionUserContext.Provider>
  )
}

export function useSessionUser() {
  const context = useContext(SessionUserContext);

  return context;
}
