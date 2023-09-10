import { ContextTicketUser } from "../context/ContextTickets";
import Ticket from "./Ticket";

import "./sass_components/TicketsContainer.scss"

const TicketsSavesComponent = () => {
    
  const {states} = ContextTicketUser()
  const {saves} = states

  return (
    <div className="tickets_container">
      {saves.length > 0 ? (
        saves.map((save,index) => <Ticket key={index} stock={save} />)
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsSavesComponent;
