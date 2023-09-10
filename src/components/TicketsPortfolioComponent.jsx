import "./sass_components/TicketsContainer.scss"

import { ContextTicketUser } from "../context/ContextTickets";
import Ticket from "./Ticket";

const TicketsPortfolioComponent = () => {

    const {states} = ContextTicketUser()
    const {bag} = states 

  return (
    <div className="tickets_container">
      {bag.length > 0 ? (
        bag.map((save,index) => <Ticket key={index} stock={save}/>)
      ) : (
        <p className="load-ticket" >Ainda não há itens salvos</p>
      )}
    </div>
  )
}

export default TicketsPortfolioComponent