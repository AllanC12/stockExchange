import React from "react";

import "./sass_components/TicketsContainer.scss";

import { getTickets } from "../slices/getTicketsSlices";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const TicketsContainer = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  const url = import.meta.env.VITE_URL_API;

  useEffect(() => {
    const searchTickets = async () => {
      let response = await dispatch(getTickets(url));
      setData(response);
    };
     searchTickets();
  }, []);

  setTimeout(() => {
    console.log(data)
  },1000)

  return (
    <div className="tickets_container">
      {data &&
        data.payload.stocks.map((stock) => (
          <div key={stock.stock} className="ticket">
            <div className="header-ticket">
              <img src={stock.logo} />
              <h2>{stock.name}</h2>
            </div>
           </div>
        ))}
    </div>
  );
};

export default TicketsContainer;
