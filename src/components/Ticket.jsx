import "./sass_components/Ticket.scss";

import { ContextTicketUser } from "../context/ContextTickets";

import { useState, useEffect } from "react";

import {
  FaPlus,
  FaStar,
  FaRegStar,
  FaRegBookmark,
  FaBookmark,
  FaCheck,
} from "react-icons/fa";

const Ticket = ({ stock }) => {
  const { methods, states, setLists } = ContextTicketUser();
  const { addFunction, removeFunction } = methods;
  const { bagByUser, savedByUser, favoritesByUser } = states;
  const { setBag, setSaves, setFavorites } = setLists;
  
  const [confirmBag,setconfirmBag] = useState(false)
  const [confirmSaves,setConfirmSave] = useState(false)
  const [confirmFavorite, setConfirmFavorite] = useState(false);

  const verifyTicketForUser = (stock,ticketsForUser,setConfirmTicket) => {
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
    verifyTicketForUser(stock,bagByUser,setconfirmBag)
  },[bagByUser])
  
  useEffect(() => {
    verifyTicketForUser(stock,savedByUser,setConfirmSave)
  },[savedByUser])

  useEffect(() => {
    verifyTicketForUser(stock,favoritesByUser,setConfirmFavorite);
  }, [favoritesByUser]);

  return (
    <div className="ticket">
      <div className="header-ticket">
        <img src={stock.logo} />
        <h2>{stock.name}</h2>
      </div>

      <div className="content-ticket">
        <h4>Preço: R${stock.close}</h4>
        <h4>Ticket: {stock.stock}</h4>
        <h4>Setor: {stock.sector}</h4>
      </div>

      <div className="footer-ticket">
        {confirmBag ? (
          <FaCheck
            onClick={() => removeFunction(stock, setBag)}
            title="Remover investimento"
          />
        ) : (
          <FaPlus
            onClick={() => addFunction(stock, setBag)}
            title="Adicionar na carteira"
          />
        )}

        {confirmSaves ? (
          <FaBookmark
            onClick={() => removeFunction(stock, setSaves)}
            title="Remover investimento"
          />
        ) : (
          <FaRegBookmark
            onClick={() => addFunction(stock, setSaves)}
            title="Salvar investimento"
          />
        )}

        {confirmFavorite ? (
          <FaStar
            onClick={() => removeFunction(stock, setFavorites)}
            title="Remover investimento"
          />
        ) : (
          <FaRegStar
            onClick={() => addFunction(stock, setFavorites)}
            title="Favoritar investimento"
          />
        )}
      </div>
    </div>
  );
};

export default Ticket;
