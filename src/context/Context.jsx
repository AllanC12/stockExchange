import { createContext,useContext,useState } from "react";

export const ContextUserData = createContext();

export const ContextUserDataProvider = ({ children }) => {
   const [bag, setBag] = useState([]);
   const [saves, setSaves] = useState([]);
   const [favorites, setFavorites] = useState([]);

   const methods = {
      setBag,
      setSaves,
      setFavorites
   }

   const states = {
      bag,
      saves,
      favorites
   }

   const contextValue = {
      states,methods
   }

   return (
      <ContextUserData.Provider value={contextValue}>
        { children}
      </ContextUserData.Provider>
   )
};

export const UseMyContext = () => {
   return useContext(ContextUserData)
}
