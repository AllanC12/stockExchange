import React from "react";

import "./sass_components/TicketsContainer.scss";

import { handleTickets } from "../slices/getTicketsSlices";

import Ticket from "./Ticket";

import { ContextTicketUser } from "../context/ContextTickets";

const TicketsContainer = () => {
  const { states } = ContextTicketUser();
  const { ticketsHome } = states;
  
  return (
    <div className="tickets_container">
      {ticketsHome ? (
        ticketsHome.payload.stocks
          .slice(0, 20)
          .map((stock, index) => <Ticket key={index} stock={stock} />)
      ) : (
        <p className="load-ticket">Carregando...</p>
      )}
    </div>
  );
};

export default TicketsContainer;
