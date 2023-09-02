import "./sass_components/Ticket.scss";

import { useState } from "react";

import { UseMyContext } from "../context/Context";

import {
  FaPlus,
  FaStar,
  FaRegStar,
  FaRegBookmark,
  FaBookmark,
  FaCheck,
} from "react-icons/fa";

const Ticket = ({ stock }) => {
  const { methods } = UseMyContext();
  const { states } = UseMyContext();
  const { setBag, setSaves, setFavorites } = methods;
  const { bag, saves, favorites } = states;

  const addBag = (stock) => {
    setBag((prevBag) => Array.from(new Set([...prevBag, stock])));
  };

  const addSaves = (stock) => {
    setSaves((prevSaves) => Array.from(new Set([...prevSaves, stock])));
  };

  const addFavorites = (stock) => {
    setFavorites((prevFavorites) =>
      Array.from(new Set([...prevFavorites, stock]))
    );
  };

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
        <div className="add-portfolio">
          {bag.some((item) => item.stock === stock.stock) ? (
            <FaCheck />
          ) : (
            <FaPlus
              onClick={() => addBag(stock)}
              title="Adicionar na carteira"
            />
          )}
        </div>
        <div
          className="add-saves"
          onClick={() => addSaves(stock)}
          title="Salvar para mais tarde"
        >
          {saves.some((item) => item.stock === stock.stock) ? (
            <FaBookmark />
          ) : (
            <FaRegBookmark title="Salvar investimento" />
          )}
        </div>
        <div
          className="add-favorites"
          onClick={() => addFavorites(stock)}
          title="Favoritar investimento"
        >
          {favorites.some((item) => item.stock === stock.stock) ? (
            <FaStar />
          ) : (
            <FaRegStar title="Favoritar investimento" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
