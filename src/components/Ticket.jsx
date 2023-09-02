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

  const { methodsAdd } = UseMyContext();
  const { methodsRemove } = UseMyContext();
  const { states } = UseMyContext();
  const {addBag,addSaves,addFavorites} = methodsAdd;
  const { bag, saves, favorites } = states;
  const {removeFromBag,removeFromSaves,removeFromFavorites} = methodsRemove


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
          {bag.some((item) => item.stock === stock.stock) ? (
            <FaCheck onClick={() => removeFromBag(stock)} title="Investimento em carteira" />
          ) : (
            <FaPlus
              onClick={() => addBag(stock)}
              title="Adicionar na carteira"
            />
          )}

          {saves.some((item) => item.stock === stock.stock) ? (
            <FaBookmark onClick={() => removeFromSaves(stock)} title="Investimento salvo" />
          ) : (
            <FaRegBookmark
              onClick={() => addSaves(stock)}
              title="Salvar investimento"
            />
          )}

          {favorites.some((item) => item.stock === stock.stock) ? (
            <FaStar onClick={() => removeFromFavorites(stock)} title="Adicionado nos favoritos" />
          ) : (
            <FaRegStar
              onClick={() => addFavorites(stock)}
              title="Favoritar investimento"
            />
          )}
       </div>
    </div>
  );
};

export default Ticket;
