import { useEffect, useMemo } from "react";

import { createContext, useContext, useState } from "react";

import { useDispatch } from "react-redux";

import { sendTicketUserSlice } from "../slices/getTicketsSlices";

import { ContextDataUser } from "./ContextDataUser";

export const TicketsUser = createContext();

export const ContextTicketsDataProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { idUser } = ContextDataUser();

  const dataRequest = {
    url: "",
    stock: null,
    idUser,
  };

  const sendStockFromServer = async (url, arrayStock) => {
    dataRequest.url = url;
    arrayStock.map((stock) => {
      dataRequest.stock = stock;
    });

    await dispatch(sendTicketUserSlice(dataRequest));
    console.log(dataRequest);
  };

  const addFunction = async (stock, setStockAdd, url, arrayStock) => {
    setStockAdd((prevStockAdded) =>
      Array.from(new Set([...prevStockAdded, stock]))
    );

    sendStockFromServer(url, arrayStock);
  };

  const removeFunction = (stock, setListStock) => {
    setListStock((prevList) =>
      prevList.filter((item) => item.stock !== stock.stock)
    );
  };

  const methods = {
    addFunction,
    removeFunction,
    sendStockFromServer,
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
    states,
  };

  // const sendTicketUser = async () => {
  //   if (bag.length > 0) {
  //     await Promise.all(
  //       await bag.map(async (bag) => {
  //         dataRequest.url = urlPortfolio
  //         dataRequest.stock = bag;
  //       })
  //     );
  //     await dispatch(sendTicketUserSlice(dataRequest));
  //   }

  //   if (saves.length > 0) {
  //     await Promise.all(
  //       await saves.map(async (save) => {
  //         dataRequest.url = urlSaves
  //         dataRequest.stock = save;
  //       })
  //     );
  //     await dispatch(sendTicketUserSlice(dataRequest));
  //   }

  //    if (favorites.length > 0) {
  //     await Promise.all(
  //       await favorites.map(async (favorite) => {
  //         dataRequest.url = urlFavorite
  //         dataRequest.stock = favorite;
  //       })
  //     );
  //     await dispatch(sendTicketUserSlice(dataRequest));
  //   }
  //     return;

  // };

  // useEffect(() => {
  //   sendTicketUser();
  // }, [bag, saves, favorites]);

  return (
    <TicketsUser.Provider value={TicketsUserValue}>
      {children}
    </TicketsUser.Provider>
  );
};

export const ContextTicketUser = () => {
  return useContext(TicketsUser);
};
