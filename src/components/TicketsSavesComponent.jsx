import { ContextTicketUser } from "../context/ContextTickets";
import Ticket from "./Ticket";

import "./sass_components/TicketsContainer.scss";

const TicketsSavesComponent = () => {
  const { states } = ContextTicketUser();
  const { savedByUser } = states;

  return (
    <div className="tickets_container">
      {savedByUser.length > 0 ? (
        savedByUser.map((save, index) => (
          <Ticket key={index} stock={save.stock} />
        ))
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsSavesComponent;
