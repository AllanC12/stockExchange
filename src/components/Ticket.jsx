import "./sass_components/Ticket.scss";

import { ContextTicketUser } from "../context/ContextTickets";

import { useState, useEffect } from "react";

import { FaPlus, FaRegBookmark, FaBookmark, FaCheck } from "react-icons/fa";

const Ticket = ({ stock }) => {
  const { methods, states, setLists } = ContextTicketUser();
  const { addFunction, removeFunction } = methods;
  const { bagByUser, savedByUser } = states;
  const { setBag, setSaves } = setLists;

  const [idUser] = useState(JSON.parse(localStorage.getItem("idUser")));

  const [confirmBag, setConfirmBag] = useState(false);
  const [confirmSaves, setConfirmSave] = useState(false);

  const urlPortfolio ="https://stockexchange.glitch.me/tickets_portfolio";
  const urlSaves = "https://stockexchange.glitch.me/tickets_saves";
  const urlBagUser = `${urlPortfolio}?idUser=${idUser}`;
  const urlSaveUser = `${urlSaves}?idUser=${idUser}`;

  const verifyTicketForUser = (stock, ticketsForUser, setConfirmTicket) => {
    if (ticketsForUser.length === 0) {
      setConfirmTicket(false);
      return;
    }

    for (let i = 0; i < ticketsForUser.length; i++) {
      if (ticketsForUser[i].stock.stock === stock.stock) {
        setConfirmTicket(true);
        break;
      } else {
        setConfirmTicket(false);
      }
    }
  };

  useEffect(() => {
    verifyTicketForUser(stock, bagByUser, setConfirmBag);
  }, [bagByUser]);

  useEffect(() => {
    verifyTicketForUser(stock, savedByUser, setConfirmSave);
  }, [savedByUser]);

  return (
    <div className="ticket">
      <div className="header-ticket">
        <img src={stock.logo} />
        <h2>{stock.name}</h2>
      </div>

      <div className="content-ticket">
        <h4>Preço: R${stock.close.toFixed(2)}</h4>
        <h4>Ticket: {stock.stock}</h4>
        <h4>Setor: {stock.sector}</h4>
      </div>

      <div className="footer-ticket">
        {confirmBag ? (
          <div
            className="ticket-icon"
            onClick={() =>
              removeFunction(stock, setBag, urlPortfolio, urlBagUser)
            }
          >
            <FaCheck title="Remover investimento" />
          </div>
        ) : (
          <div
            className="ticket-icon"
            onClick={(e) => addFunction(stock, setBag, e.target)}
          >
            <FaPlus title="Adicionar na carteira" />
          </div>
        )}

        {confirmSaves ? (
          <div
            className="ticket-icon"
            onClick={() =>
              removeFunction(stock, setSaves, urlSaves, urlSaveUser)
            }
          >
            <FaBookmark title="Remover investimento" />
          </div>
        ) : (
          <div
            className="ticket-icon"
            onClick={(e) =>
              addFunction(stock, setSaves, e.target)
            }
          >
            <FaRegBookmark title="Salvar investimento" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
