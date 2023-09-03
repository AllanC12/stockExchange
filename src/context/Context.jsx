import { createContext,useContext,useState } from "react";

export const ContextUserData = createContext();

export const ContextUserDataProvider = ({ children }) => {
   const [bag, setBag] = useState([]);
   const [saves, setSaves] = useState([]);
   const [favorites, setFavorites] = useState([]);

    const addFunction = (stock,setStockAdd) => {
      setStockAdd(prevStockAdded => Array.from(new Set([...prevStockAdded, stock])));
    }

    const removeFunction = (stock,setListStock) => {
      setListStock(prevList => prevList.filter(item => item.stock !== stock.stock))
    }

   const methodAdd = {
      addFunction
   }

   const methodRemove = {removeFunction}

   const setLists = {
    setBag,
    setSaves,
    setFavorites
   }

   console.log(bag)


   const states = {
      bag,
      saves,
      favorites
   }

   const contextValue = {
      states,methodAdd,methodRemove,setLists
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
