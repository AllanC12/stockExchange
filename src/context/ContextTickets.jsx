import { createContext, useContext, useState } from "react";

export const TicketsUser = createContext();

export const ContextTicketsDataProvider = ({ children }) => {
  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFunction = (stock, setStockAdd) => {
    setStockAdd((prevStockAdded) =>
      Array.from(new Set([...prevStockAdded, stock]))
    );
  };

  const removeFunction = (stock, setListStock) => {
    setListStock((prevList) =>
      prevList.filter((item) => item.stock !== stock.stock)
    );
  };

  const methods = { 
    addFunction,
    removeFunction 
  };

  const setLists = {
    setBag,
    setSaves,
    setFavorites,
  };

  const states = {
    bag,
    saves,
    favorites,
  };

  const TicketsUserValue = {
    methods,
    setLists,
    states
  };

  return (
    <TicketsUser.Provider value={TicketsUserValue}>
      {children}
    </TicketsUser.Provider>
  );
};

export const ContextTicketUser = () => {
  return useContext(TicketsUser);
};
