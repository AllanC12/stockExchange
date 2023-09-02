import { createContext,useContext,useState } from "react";

export const ContextUserData = createContext();

export const ContextUserDataProvider = ({ children }) => {
   const [bag, setBag] = useState([]);
   const [saves, setSaves] = useState([]);
   const [favorites, setFavorites] = useState([]);

   const addBag = (stock) => {
      setBag((prevBag) => Array.from(new Set([...prevBag, stock])));
    };
  
    const addSaves = (stock) => {
      setSaves((prevSaves) => Array.from(new Set([...prevSaves, stock])));
    };
  
    const addFavorites = (stock) => {
      setFavorites((prevFavorites) =>
        Array.from(new Set([...prevFavorites, stock]))
      );
    };

    const removeFromBag = (stock) => {
      setBag(prevBag => prevBag.filter(item => item.stock !== stock.stock))
    }

    const removeFromSaves = (stock) => {
      setSaves(prevSaves => prevSaves.filter(item => item.stock !== stock.stock))
    }

    const removeFromFavorites = (stock) => {
      setFavorites(prevFavorites => prevFavorites.filter(item => item.stock !== stock.stock))
    }
  

   const methodsAdd = {
      addBag,
      addSaves,
      addFavorites
   }

   const methodsRemove = {removeFromBag,removeFromSaves,removeFromFavorites}

   console.log(bag)


   const states = {
      bag,
      saves,
      favorites
   }

   const contextValue = {
      states,methodsAdd,methodsRemove
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
