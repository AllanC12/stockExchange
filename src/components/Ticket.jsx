import "./sass_components/Ticket.scss";

import { ContextTicketUser } from "../context/ContextTickets";

import { ContextDataUser } from "../context/ContextDataUser";

import {
  FaPlus,
  FaStar,
  FaRegStar,
  FaRegBookmark,
  FaBookmark,
  FaCheck,
} from "react-icons/fa";

import { useDispatch } from "react-redux";

import { getTickets } from "../slices/getTicketsSlices";

const Ticket = ({stock }) => {
  const {idUser} = ContextDataUser()
  const { methods, states, setLists } = ContextTicketUser();
  const {favoritesUser} = states
  const { addFunction, removeFunction } = methods;
  const { bag, saves,favorites } = states;
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

        {favoritesUser.length > 0 ? (
          <FaStar
            onClick={() => removeFunction(stock,setFavorites)}
            title="Remover investimento"
          />
        ) : (
          <FaRegStar
            onClick={() => addFunction(stock,setFavorites)}
            title="Favoritar investimento"
          />
        )}
      </div>
    </div>
  );
};

export default Ticket;
