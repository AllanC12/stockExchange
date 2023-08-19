import { createContext } from "react";

export const ContextUserData = createContext();

export const ContextUserDataProvider = ({ children, value }) => {
   return (
      <ContextUserData.Provider value={{ value }}>
        { children}
      </ContextUserData.Provider>
   )
};
