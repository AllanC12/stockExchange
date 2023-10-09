import { useEffect } from "react";

import { createContext, useContext, useState } from "react";

import { useDispatch } from "react-redux";

import { sendTicketUserSlice, handleTickets } from "../slices/getTicketsSlices";

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

  const { userLogged } = ContextDataUser();
  const idUser = localStorage.getItem('userId')

  const urlPortfolio = import.meta.env.VITE_URL_TICKETS_PORTFOLIO;
  const urlSaves = import.meta.env.VITE_URL_TICKETS_SAVES;
  const urlFavorite = import.meta.env.VITE_URL_TICKETS_FAVORITES;

  const urlBagUser = `${urlPortfolio}?idUser=${idUser}`;
  const urlSaveUser = `${urlSaves}?idUser=${idUser}`;
  const urlFavoriteUser = `${urlFavorite}?idUser=${idUser}`;

  const dataRequest = {
    url: "",
    stock: null,
    idUser,
  };

  const getTicketByUser = async (url, setListTicket) => {
    let response =  await dispatch(handleTickets(url,'GET'));
    setListTicket(response.payload);
  };

  useEffect(() => {
    getTicketByUser(urlBagUser, setBagByUser);
    getTicketByUser(urlSaveUser, setSavedByUser);
    getTicketByUser(urlFavoriteUser, setFavoritesByUser);
  }, [userLogged]);

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
    const updatePortfolio = async () => {
      await sendTicketFromServer(urlPortfolio, bag);
      await getTicketByUser(urlBagUser, setBagByUser);
    };
    updatePortfolio();
  }, [bag]);

  useEffect(() => {
    const updateSaves = async () => {
      await sendTicketFromServer(urlSaves, saves);
      await getTicketByUser(urlSaveUser, setSavedByUser);
    };
    updateSaves();
  }, [saves]);

  useEffect(() => {
    const updateFavorites = async () => {
      await sendTicketFromServer(urlFavorite, favorites);
      await getTicketByUser(urlFavoriteUser, setFavoritesByUser);
    };
    updateFavorites();
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
