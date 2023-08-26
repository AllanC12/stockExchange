import React from "react";

import "./sass_components/TicketsContainer.scss";

import { getTickets } from "../slices/getTicketsSlices";

import Ticket from "./Ticket";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const TicketsContainer = ({ setBag,bag, setSaves,saves, setFavorites,favorites }) => {

  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  const url = import.meta.env.VITE_URL_API;

  const addressHome = 'http://localhost:5173/home_broker'
  const addressFavorite = 'http://localhost:5173/favorite'
  const addressSave = 'http://localhost:5173/home_broker/saves'
  const addressPortfolio = 'http://localhost:5173/portfolio'

  useEffect(() => {
    const searchTickets = async () => {
      let response = await dispatch(getTickets(url));
      setData(response);
    };
    searchTickets();
  }, [url]);

  return (
    <div className="tickets_container">
      {data && location.href === addressHome &&
        data.payload.stocks.map((stock) => (
          <Ticket
            key={stock.stock}
            setBag={setBag}
            setSaves={setSaves}
            setFavorites={setFavorites}
            stock={stock}
          />
        ))}
        {location.href === addressSave && saves && 
          saves.map(save => (
             <Ticket 
             key={save.stock}
              stock={save}
             />
          ))
        }
    </div>
  );
};

export default TicketsContainer;
