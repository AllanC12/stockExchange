import "./sass_pages/HomeBroker.scss";
import Aside from "../components/Aside";
import TicketsContainer from "../components/TicketsContainer";

import { useState } from "react";

const HomeBroker = () => {
  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);
  const [favorites, setFavorites] = useState([]);

  console.log(saves)

  return (
    <div className="container_home">
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
