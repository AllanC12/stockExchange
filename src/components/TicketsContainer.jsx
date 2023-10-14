import React from "react";

import "./sass_components/TicketsContainer.scss";

import { handleTickets } from "../slices/getTicketsSlices";

import Ticket from "./Ticket";

import { ContextTicketUser } from "../context/ContextTickets";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const TicketsContainer = () => {
  const url = import.meta.env.VITE_URL_API;
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { states } = ContextTicketUser();
  const { setLists } = ContextTicketUser();
  const { itemRemoved } = states;
  const { setItemRemoved } = setLists;

  const searchTickets = async () => {
    let response = await dispatch(handleTickets(url, "GET"));
    setData(response);
  };

  useEffect(() => {
    const getTickets = async () => {
      if(itemRemoved){
        await searchTickets();
        setItemRemoved(false);
      }
    };

     getTickets();
  }, [url]);

  return (
    <div className="tickets_container">
      {data ? (
        data.payload.stocks
          .slice(0, 20)
          .map((stock, index) => <Ticket key={index} stock={stock} />)
      ) : (
        <p className="load-ticket">Carregando...</p>
      )}
    </div>
  );
};

export default TicketsContainer;
