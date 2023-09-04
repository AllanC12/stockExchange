import "./sass_pages/HomeBroker.scss";
import Aside from "../components/Aside";
import TicketsContainer from "../components/TicketsContainer";

const HomeBroker = () => {
  
  return (
    <div className="container_ticket">
      <Aside />
      <TicketsContainer/>
    </div>
  );
};

export default HomeBroker;
