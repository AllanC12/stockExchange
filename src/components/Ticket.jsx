import "./sass_components/Ticket.scss";

import { ContextTicketUser } from "../context/ContextTickets";

import { useState, useEffect } from "react";

import { ContextDataUser } from "../context/ContextDataUser";

import {
  FaPlus,
  FaStar,
  FaRegStar,
  FaRegBookmark,
  FaBookmark,
  FaCheck,
} from "react-icons/fa";

const Ticket = ({ stock }) => {
  const { idUser } = ContextDataUser();
  const { methods, states, setLists } = ContextTicketUser();
  const { addFunction, removeFunction } = methods;
  const { bagByUser, savedByUser, favoritesByUser } = states;
  const { setFavoriteByUser } = setLists;
  const { bag, saves, favorites } = states;
  const { setBag, setSaves, setFavorites } = setLists;
<<<<<<< HEAD
  const [confirmFavorite,setConfirmFavorite] = useState(false)

  const verifyTicketFavorite = async (stock) => {
    let verifyFavorite = false

    const respFavorite =  Promise.all(favoritesByUser).then((response) => {
  
      for(let i = 0; i < response.length; i++){
        if(response[i].stock.stock === stock.stock){
          verifyFavorite = true
          break
        }
      }
      
      setConfirmFavorite(verifyFavorite)
    })

    return respFavorite
  }

  const verifyFavorite = async () => {
    const resp = await verifyTicketFavorite(stock)
    console.log(resp)
    setConfirmFavorite(resp)
  }

   useEffect(() => {
      const awaitFavorite = async () => {
        verifyFavorite()
      }
      awaitFavorite()
   })


=======
  const [confirmFavorite, setConfirmFavorite] = useState(false);

  useEffect(() => {
    const verifyTicketFavorite = (stock) => {
      for (let i = 0; i < favoritesByUser.length; i++) {
        if (favoritesByUser[i].stock.stock === stock.stock) {
          setConfirmFavorite(true);
          break;
        } else {
          setConfirmFavorite(false);
        }
      }
    };

    verifyTicketFavorite(stock);
  }, [favoritesByUser]);

>>>>>>> testing
  return (
    <div className="ticket">
      <div className="header-ticket">
        <img src={stock.logo} />
        <h2>{stock.name}</h2>
      </div>

      <div className="content-ticket">
        <h4>Preço: R${stock.close}</h4>
        <h4>Ticket: {stock.stock}</h4>
        <h4>Setor: {stock.sector}</h4>
      </div>

      <div className="footer-ticket">
        {bagByUser.some((item) => item.stock === stock) ? (
          <FaCheck
            onClick={() => removeFunction(stock, setBag)}
            title="Remover investimento"
          />
        ) : (
          <FaPlus
            onClick={() => addFunction(stock, setBag)}
            title="Adicionar na carteira"
          />
        )}

        {savedByUser.some((item) => item.stock === stock) ? (
          <FaBookmark
            onClick={() => removeFunction(stock, setSaves)}
            title="Remover investimento"
          />
        ) : (
          <FaRegBookmark
            onClick={() => addFunction(stock, setSaves)}
            title="Salvar investimento"
          />
        )}

        {confirmFavorite ? (
          <FaStar
            onClick={() => removeFunction(stock, setFavorites)}
            title="Remover investimento"
          />
        ) : (
          <FaRegStar
            onClick={() => addFunction(stock, setFavorites)}
            title="Favoritar investimento"
          />
        )}
      </div>
    </div>
  );
};

export default Ticket;
