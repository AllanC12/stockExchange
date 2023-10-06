import React from "react";

import "./sass_components/TicketsContainer.scss";

import { getTickets } from "../slices/getTicketsSlices";

import Ticket from "./Ticket";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { ContextTicketUser } from "../context/ContextTickets";

const TicketsContainer = () => {
  const url = import.meta.env.VITE_URL_API;
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  const { states } = ContextTicketUser();
  const { bagByUser, savedByUser, favoritesByUser } = states;

  const searchTickets = async () => {
    let response = await dispatch(getTickets(url));
    setData(response);
  };

  useEffect(() => {
    searchTickets();
  }, [url]);

  const verifyTicketFavorite = async (stock) => {

    const respFavorite = await Promise.all(favoritesByUser).then((response) => {
      let verifyFavorite = false

      for(const favorite of response){
        if(favorite.stock.stock === stock.stock){
          verifyFavorite = true
        }
      }

      return verifyFavorite
    })
   return respFavorite
  }

  return (
    <div className="tickets_container">
      {data ? (
        data.payload.stocks.slice(0,20).map((stock, index) => (
          <Ticket key={index} stock={stock} isSaveInFavorite={verifyTicketFavorite(stock)}/>
        ))
      ) : (
        <p className="load-ticket">Carregando...</p>
      )}
    </div>
  );
};

export default TicketsContainer;
