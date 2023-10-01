import React from "react";

import "./sass_components/TicketsContainer.scss";

import { getTickets } from "../slices/getTicketsSlices";

import Ticket from "./Ticket";

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
  }, [url]);

  console.log(data.payload)

  return (
    <div className="tickets_container">
      {data ? (
          data.payload.stocks.map((stock,index) => (
            <Ticket
              key={index}
              stock={stock}
            />
          ))
        ) : (
          <p className="load-ticket">Carregando...</p>
        )
      
      }

    </div>
  );
};

export default TicketsContainer;
