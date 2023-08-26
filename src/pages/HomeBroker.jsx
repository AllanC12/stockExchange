import "./sass_pages/HomeBroker.scss";
import Aside from "../components/Aside";
import TicketsContainer from "../components/TicketsContainer";

import { useState } from "react";

const HomeBroker = () => {
  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="container_home">
      <Aside />
      <TicketsContainer
        setBag={setBag}
        bag={bag}
        setSaves={setSaves}
        saves={saves}
        setFavorites={setFavorites}
        favorites={favorites}
      />
    </div>
  );
};

export default HomeBroker;
