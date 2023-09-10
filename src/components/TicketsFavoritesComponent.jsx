import { useEffect } from "react";

import "./sass_components/TicketsContainer.scss";

import { sendTicketUserSlice } from "../slices/getTicketsSlices";

import { useDispatch } from "react-redux";

import { ContextTicketUser } from "../context/ContextTickets";
import { ContextDataUser } from "../context/ContextDataUser";

import Ticket from "./Ticket";

const TicketsFavoritesComponent = () => {
  const dispatch = useDispatch();
  const { states } = ContextTicketUser();
  const { idUser } = ContextDataUser();
  const { favorites } = states;
  const urlUser = `${import.meta.env.VITE_URL_SERVER}/${idUser}/ticketsFavorites`;

  useEffect(() => {
    favorites.map((favorite) => {
      const sendTicketUser = async () => {
        let dataRequest = {
          url: urlUser,
          ticket: favorite
        }
        await dispatch(sendTicketUserSlice(dataRequest));
      };
      sendTicketUser();
    });
  }, [favorites]);

  return (
    <div className="tickets_container">
      {favorites.length > 0 ? (
        favorites.map((save, index) => <Ticket key={index} stock={save} />)
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsFavoritesComponent;
