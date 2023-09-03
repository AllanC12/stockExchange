import "./sass_components/TicketsContainer.scss"

import { UseMyContext } from "../context/Context";
import Ticket from "./Ticket";

const TicketsFavoritesComponent = () => {

    const {states} = UseMyContext()
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