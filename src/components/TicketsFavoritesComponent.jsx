import "./sass_components/TicketsContainer.scss";

import { ContextTicketUser } from "../context/ContextTickets";

import Ticket from "./Ticket";

const TicketsFavoritesComponent = ({favorites}) => {

  return (
    <div className="tickets_container">
      {favorites.length > 0 ? (
        favorites.map((favorite, index) => <Ticket key={index} stock={favorite} favorites={favorites}/>)
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsFavoritesComponent;
