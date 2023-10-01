import "./sass_components/TicketsContainer.scss";

import { useDispatch } from "react-redux";

import { getTickets } from "../slices/getTicketsSlices";

import { ContextDataUser } from "../context/ContextDataUser";

import { useEffect } from "react";

import Ticket from "./Ticket";

import { ContextTicketUser } from "../context/ContextTickets";

const TicketsFavoritesComponent =  () => {
  const {idUser} = ContextDataUser()
  const {userLogged} = ContextDataUser()
  const {states}  = ContextTicketUser()
  const {methods} = ContextTicketUser()
  const {setLists} = ContextTicketUser()
  const {setFavoritesUser} = setLists
  const {favoritesUser} = states
  const {getTicketByUser} = methods

  const urlFavorite = `${import.meta.env.VITE_URL_TICKETS_FAVORITES}?idUser=${idUser}`;

  useEffect(() => {
    if(userLogged){
      getTicketByUser(urlFavorite,setFavoritesUser)
    }
  },[])

  console.log(favoritesUser)

  return (
    <div className="tickets_container">
      {favoritesUser.length > 0 ? (
        favoritesUser.map((favorite, index) => <Ticket key={index} stock={favorite.stock}/>)
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsFavoritesComponent;
