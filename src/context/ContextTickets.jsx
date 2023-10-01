import { useEffect, useMemo } from "react";

import { createContext, useContext, useState } from "react";

import { useDispatch } from "react-redux";

import { sendTicketUserSlice, getTickets } from "../slices/getTicketsSlices";

import { ContextDataUser } from "./ContextDataUser";

export const TicketsUser = createContext();

export const ContextTicketsDataProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [bagByUser, setBagByUser] = useState([]);
  const [savedByUser, setSavedByUser] = useState([]);
  const [favoritesByUser, setFavoritesByUser] = useState([]);

  const { userLogged,idUser } = ContextDataUser();

  const urlPortfolio = import.meta.env.VITE_URL_TICKETS_PORTFOLIO;
  const urlSaves = import.meta.env.VITE_URL_TICKETS_SAVES;
  const urlFavorite = import.meta.env.VITE_URL_TICKETS_FAVORITES;

  const urlBagUser = `${urlPortfolio}?idUser=${idUser}`;
  const urlSaveUser = `${urlPortfolio}?idUser=${idUser}`;
  const urlFavoriteUser = `${urlFavorite}?idUser=${idUser}`;

  const dataRequest = {
    url: "",
    stock: null,
    idUser,
  };

  const getTicketByUser = async (url, setListTicket) => {
    let response = await dispatch(getTickets(url));
    setListTicket(response.payload);
  };

  if (userLogged) {
    getTicketByUser(urlBagUser, setBagByUser);
    getTicketByUser(urlSaveUser, setSavedByUser);
    getTicketByUser(urlFavoriteUser, setFavoritesByUser);
  }

  const addFunction = async (stock, setStockAdd) => {
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
    removeFunction,
    getTicketByUser,
  };

  const setLists = {
    setBag,
    setSaves,
    setFavorites,
    setBagByUser,
    setSavedByUser,
    setFavoritesByUser,
  };

  const states = {
    bag,
    saves,
    favorites,
    bagByUser,
    savedByUser,
    favoritesByUser,
  };

  const TicketsUserValue = {
    methods,
    setLists,
    states,
  };

  const sendTicketFromServer = async (url, arrayStock) => {
    if (arrayStock.length > 0) {
      await Promise.all(
        arrayStock.map((stock) => {
          dataRequest.url = url;
          dataRequest.stock = stock;
        })
      );

      await dispatch(sendTicketUserSlice(dataRequest));
    }
  };

  useEffect(() => {
    sendTicketFromServer(urlPortfolio, bag);
    getTicketByUser(urlBagUser, setBagByUser);
  }, [bag]);

  useEffect(() => {
    sendTicketFromServer(urlSaves, saves);
    getTicketByUser(urlSaveUser, setSavedByUser);
  }, [saves]);

  useEffect(() => {
    sendTicketFromServer(urlFavorite, favorites);
    getTicketByUser(urlFavoriteUser, setFavoritesByUser);
  }, [favorites]);

  return (
    <TicketsUser.Provider value={TicketsUserValue}>
      {children}
    </TicketsUser.Provider>
  );
};

export const ContextTicketUser = () => {
  return useContext(TicketsUser);
};
