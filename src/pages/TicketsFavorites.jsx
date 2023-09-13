import { useEffect, useMemo } from "react";
import "./sass_pages/HomeBroker.scss";
import { useDispatch } from "react-redux";

import Aside from "../components/Aside";
import TicketsFavoritesComponent from "../components/TicketsFavoritesComponent";

const TicketsFavorites = () => {
  const dispatch = useDispatch()
  const {idUser} = ContextDataUser()
  const urlUser = `${import.meta.env.VITE_URL_TICKETS}`;

  useEffect(() => {
    const sendTicketUser = async () => {
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
