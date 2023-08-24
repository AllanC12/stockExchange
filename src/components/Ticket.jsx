import "./sass_components/Ticket.scss";

import { useState } from "react";

import {
  FaPlus,
  FaStar,
  FaRegStar,
  FaRegBookmark,
  FaBookmark,
  FaCheck,
} from "react-icons/fa";

const Ticket = ({ setBag, setSaves, setFavorites, stock }) => {
  
  const addBag = (stock) => {
    setBag((prevBag) => Array.from(new Set([...prevBag, stock])));
  };

  const addSaves = (stock) => {
    setSaves((prevSaves) => Array.from(new Set([...prevSaves,stock])))
  }

  const addFavorites = (stock) => {
    setFavorites((prevFavorites) => Array.from(new Set([...prevFavorites,stock])))
  }

  return (
    <div key={stock.stock} className="ticket">
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
        <FaPlus onClick={() => addBag(stock)} title="Adicionar na carteira" />
        <FaRegBookmark onClick={() => addSaves(stock)} title="Salvar para mais tarde" />
        <FaRegStar onClick={() => addFavorites(stock)} title="Favoritar investimento" />
      </div>
    </div>
  );
};

export default Ticket;
