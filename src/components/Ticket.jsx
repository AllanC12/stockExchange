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

const Ticket = ({isSaveInFavorite,stock }) => {
  const { methods, states, setLists } = ContextTicketUser();
  const { bagByUser, savedByUser, favoritesByUser } = states;
  const { addFunction, removeFunction } = methods;
  const { bag, saves, favorites } = states;
  const { setBag, setSaves, setFavorites } = setLists;

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
        {bagByUser.some((item) => item.stock === stock) ? (
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

        {savedByUser.some((item) => item.stock === stock) ? (
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

        { isSaveInFavorite ? (
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
