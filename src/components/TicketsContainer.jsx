import React from "react";

import "./sass_components/TicketsContainer.scss";

import { getTickets } from "../slices/getTicketsSlices";

import Ticket from "./Ticket";

import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";

const TicketsContainer = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.tickets)
  const [data, setData] = useState(null);

  const url = import.meta.env.VITE_URL_API;

  useEffect(() => {
    const searchTickets = async () => {
      let response = await dispatch(getTickets(url));
      setData(response);
    };
    searchTickets();
  }, [url]);

  console.log(data)

  return (
    <div className="tickets_container">
      {loading && <p>Carregando...</p>}
      {data && (
          data.payload.stocks.map((stock,index) => (
            <Ticket
              key={index}
              stock={stock}
            />
          ))
        ) 
      
      }

    </div>
  );
};

export default TicketsContainer;
