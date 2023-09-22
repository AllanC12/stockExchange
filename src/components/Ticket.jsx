import "./sass_components/Ticket.scss";

import { ContextTicketUser } from "../context/ContextTickets";

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
  const { bag, saves, favorites } = states;
  const { setBag, setSaves, setFavorites } = setLists;

  const urlPortfolio = `${import.meta.env.VITE_URL_TICKETS_PORTFOLIO}`;
  const urlSaves = `${import.meta.env.VITE_URL_TICKETS_SAVES}`;
  const urlFavorite = `${import.meta.env.VITE_URL_TICKETS_FAVORITES}`;
  
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
        {bag.some((item) => item.stock === stock.stock) ? (
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

        {saves.some((item) => item.stock === stock.stock) ? (
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

        {favorites.some((item) => item.stock === stock.stock) ? (
          <FaStar
            onClick={() => removeFunction(stock,setFavorites)}
            title="Remover investimento"
          />
        ) : (
          <FaRegStar
            onClick={() => addFunction(stock,setFavorites,urlFavorite,favorites)}
            title="Favoritar investimento"
          />
        )}
      </div>
    </div>
  );
};

export default Ticket;
