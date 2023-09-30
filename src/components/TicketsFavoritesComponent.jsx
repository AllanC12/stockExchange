import "./sass_components/TicketsContainer.scss";

import { useDispatch } from "react-redux";

import { getTickets } from "../slices/getTicketsSlices";

import { ContextDataUser } from "../context/ContextDataUser";

import Ticket from "./Ticket";

import { ContextTicketUser } from "../context/ContextTickets";

const TicketsFavoritesComponent =  () => {
  
  const {states}  = ContextTicketUser()
  const {favoritesUser} = states
  console.log(favoritesUser)

  return (
    <div className="tickets_container">
      {favoritesUser.length > 0 ? (
        favoritesUser.map((favorite, index) => <Ticket key={index} stock={favorite.stock}/>)
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsFavoritesComponent;
