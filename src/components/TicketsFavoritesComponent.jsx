import "./sass_components/TicketsContainer.scss";

import { useDispatch } from "react-redux";

import { ContextTicketUser } from "../context/ContextTickets";

import { getTickets } from "../slices/getTicketsSlices";

import { ContextDataUser } from "../context/ContextDataUser";

import Ticket from "./Ticket";

const TicketsFavoritesComponent =  () => {
  const dispatch = useDispatch()
  const {idUser} = ContextDataUser()
  const {states} = ContextTicketUser()
  const urlFavorite = `${import.meta.env.VITE_URL_TICKETS_FAVORITES}`

  const getFavorites = async () => {
    const favorites = await dispatch(getTickets(urlFavorite))
    console.log(favorites)
  }

  getFavorites()
 
  // const {favorites} = states

  return (
    <p>alou</p>
    // <div className="tickets_container">
    //   {favorites.length > 0 ? (
    //     favorites.map((favorite, index) => <Ticket key={index} stock={favorite}/>)
    //   ) : (
    //     <p className="load-ticket">Ainda não há itens salvos</p>
    //   )}
    // </div>
  );
};

export default TicketsFavoritesComponent;
