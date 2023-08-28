import "./sass_pages/HomeBroker.scss"

import Aside from "../components/Aside";
import TicketsFavoritesComponent from "../components/TicketsFavoritesComponent";

const TicketsFavorites = () => {
  return (
    <div className="container_ticket">
    <Aside/>
    <TicketsFavoritesComponent/>
  </div>
  )
}

export default TicketsFavorites