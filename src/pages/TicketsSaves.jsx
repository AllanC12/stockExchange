import Aside from "../components/Aside";
import TicketsSavesComponent from "../components/TicketsSavesComponent";

import "./sass_pages/HomeBroker.scss"

const TicketsSaves = () => {

  return (
    <div className="container_ticket">
      <Aside/>
      <TicketsSavesComponent/>
    </div>
  );
};

export default TicketsSaves;
