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
  const { states } = ContextTicketUser();
  const {favorites} = states
  const { idUser } = ContextDataUser();
  const urlUser = `${import.meta.env.VITE_URL_TICKETS}`;
  const favoriteMemoized = useMemo(()=> {
    return favorites
  },[favorites])

  console.log(favorites);

  useEffect(() => {
    const sendTicketUser = async () => {
      if (favorites.length > 0) {
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
  }, [favoriteMemoized]);

  return (
    <div className="container_ticket">
      <Aside />
      <TicketsFavoritesComponent />
    </div>
  );
};

export default TicketsFavorites;
