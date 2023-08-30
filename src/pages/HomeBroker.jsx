import "./sass_pages/HomeBroker.scss";
import Aside from "../components/Aside";
import TicketsContainer from "../components/TicketsContainer";
import {UseMyContext} from "../context/Context"

const HomeBroker = () => {

  
  return (
    <div className="container_ticket">
      <Aside />
      <TicketsContainer/>
    </div>
  );
};

export default HomeBroker;
