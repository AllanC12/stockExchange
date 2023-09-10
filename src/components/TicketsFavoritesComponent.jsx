import "./sass_components/TicketsContainer.scss"

import { ContextTicketUser } from "../context/ContextTickets";
import Ticket from "./Ticket";

const TicketsFavoritesComponent = () => {

    const {states} = ContextTicketUser()
    const {favorites} = states 

  return (
    <div className="tickets_container">
      {favorites.length > 0 ? (
        favorites.map((save,index) => <Ticket key={index} stock={save} />)
      ) : (
        <p className="load-ticket" >Ainda não há itens salvos</p>
      )}
    </div>
  )
}

export default TicketsFavoritesComponent