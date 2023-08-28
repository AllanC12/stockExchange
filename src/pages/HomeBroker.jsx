import "./sass_pages/HomeBroker.scss";
import Aside from "../components/Aside";
import TicketsContainer from "../components/TicketsContainer";
import { UseMyContext } from "../context/Context";

const HomeBroker = () => {

  const {methods} = UseMyContext()
  const {setBag,setSaves,setFavorites} = methods

  return (
    <div className="container_ticket">
      <Aside />
      <TicketsContainer
        setBag={setBag}
        setSaves={setSaves}
        setFavorites={setFavorites}
      />
    </div>
  );
};

export default HomeBroker;
