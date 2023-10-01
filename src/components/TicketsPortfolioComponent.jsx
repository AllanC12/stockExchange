import "./sass_components/TicketsContainer.scss"

import Ticket from "./Ticket";
 
import { ContextTicketUser } from "../context/ContextTickets";

const TicketsPortfolioComponent = () => {
  const {states} = ContextTicketUser()
  const {bagByUser} = states

  return (
    <div className="tickets_container">
      {bagByUser.length > 0 ? (
        bagByUser.map((save,index) => <Ticket key={index} stock={save.stock}/>)
      ) : (
        <p className="load-ticket" >Ainda não há itens salvos</p>
      )}
    </div>
  )
}

export default TicketsPortfolioComponent