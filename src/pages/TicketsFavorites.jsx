import { useEffect, useMemo } from "react";
import "./sass_pages/HomeBroker.scss";
import { useDispatch } from "react-redux";

import { ContextDataUser } from "../context/ContextDataUser";
import { sendTicketUserSlice } from "../slices/getTicketsSlices";
import { ContextTicketUser } from "../context/ContextTickets";

import Aside from "../components/Aside";
import TicketsFavoritesComponent from "../components/TicketsFavoritesComponent";

const TicketsFavorites = () => {
  const dispatch = useDispatch();
  const { favorites } = ContextTicketUser();
  const { idUser } = ContextDataUser();
  const urlUser = `${import.meta.env.VITE_URL_TICKETS}`;

  console.log(favorites);

  useEffect(() => {
    const sendTicketUser = async () => {
      if (favorites) {
        await Promise.all(
          await favorites.map(async (favorite) => {
            let dataRequest = {
              url: urlUser,
              ticket: favorite,
              idUser,
            };
            await dispatch(sendTicketUserSlice(dataRequest));
          })
        );
      }else{
        return
      }
    };

    sendTicketUser();

    console.log("resolvido");
  }, [favorites]);

  return (
    <div className="container_ticket">
      <Aside />
      <TicketsFavoritesComponent />
    </div>
  );
};

export default TicketsFavorites;
