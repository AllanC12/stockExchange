import { useEffect,useMemo } from "react";

import { createContext, useContext, useState } from "react";

import { useDispatch } from "react-redux";

import { sendTicketUserSlice } from "../slices/getTicketsSlices";

import { ContextDataUser } from "./ContextDataUser";

export const TicketsUser = createContext();

export const ContextTicketsDataProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { idUser } = ContextDataUser();
  const urlFavorite = `${import.meta.env.VITE_URL_TICKETS_FAVORITES}`;

  const favoriteMemoized = useMemo(()=> {
    return favorites 
  },[favorites])

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
  
     const sendTicketUser = async () => {

      if (favorites.length > 0) {

        await Promise.all(
          await favorites.map(async (favorite) => {
    
            let dataRequest = {
              urlFavorite,
              favorite,
              idUser
            };

            await dispatch(sendTicketUserSlice(dataRequest));
          })
        );
      } else {
        return;
      }

    };
    
    const getTicket = async () => {
      const resp = await fetch(
        `${import.meta.env.VITE_URL_SERVER}/${idUser}/tickets_favorites`
        ).then((resp) => resp.json());
        console.log(resp)
    }

    sendTicketUser();
    getTicket()

 
  return (
    <TicketsUser.Provider value={TicketsUserValue}>
      {children}
    </TicketsUser.Provider>
  );
};

export const ContextTicketUser = () => {
  return useContext(TicketsUser);
};
