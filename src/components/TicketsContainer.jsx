import React from "react";

import { useState } from "react";

import "./sass_components/TicketsContainer.scss";

import Ticket from "./Ticket";

import { ContextTicketUser } from "../context/ContextTickets";

const TicketsContainer = () => {
  const { states } = ContextTicketUser();
  const { ticketsHome } = states;

  const [countArray,setCountArray] = useState(20)

  const showMoreTickets = () => {
    if(countArray === 1600) return;
    setCountArray(prevCount => prevCount + 20)
  }

  return (
    <div className="container">
     <div className="tickets_container">
      {ticketsHome ? (
        ticketsHome.payload.stocks
          .slice(0, countArray)
          .map((stock, index) => <Ticket key={index} stock={stock} />)
      ) : (
        <p className="load-ticket">Carregando...</p>
      )}
    </div>
    
      <div className="view-more">
        <button onClick={showMoreTickets}>Exibir mais</button>
      </div>
    </div>

  );
};

export default TicketsContainer;
