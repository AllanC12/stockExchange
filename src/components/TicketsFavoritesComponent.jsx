import "./sass_components/TicketsContainer.scss";

import Ticket from "./Ticket";

import { ContextTicketUser } from "../context/ContextTickets";

const TicketsFavoritesComponent =  () => {
  const {states}  = ContextTicketUser()
  const {favoritesByUser} = states

  return (
    <div className="tickets_container">
      {favoritesByUser &&
      favoritesByUser.length > 0 ? (
        favoritesByUser.map((favorite, index) => <Ticket key={index} stock={favorite.stock}/>)
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsFavoritesComponent;
