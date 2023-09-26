import "./sass_components/TicketsContainer.scss";

import { useDispatch } from "react-redux";

import { getTickets } from "../slices/getTicketsSlices";

import { ContextDataUser } from "../context/ContextDataUser";

import Ticket from "./Ticket";
import { useEffect,useState } from "react";

const TicketsFavoritesComponent =  () => {
  const [favorites,setFavorites] = useState([])
  const dispatch = useDispatch()
  const {idUser} = ContextDataUser()
  const urlFavorite = `${import.meta.env.VITE_URL_TICKETS_FAVORITES}?idUser=${idUser}`

  const getFavorites = async () => {
    const response = await dispatch(getTickets(urlFavorite))
    setFavorites(response.payload)
  }
  
  useEffect(()=> {
    getFavorites()
  },[urlFavorite])

  console.log(favorites)


  return (
    <div className="tickets_container">
      {favorites.length > 0 ? (
        favorites.map((favorite, index) => <Ticket key={index} stock={favorite.stock}/>)
      ) : (
        <p className="load-ticket">Ainda não há itens salvos</p>
      )}
    </div>
  );
};

export default TicketsFavoritesComponent;
