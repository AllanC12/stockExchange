import "./sass_components/TicketsContainer.scss"

import { ContextDataUser } from "../context/ContextDataUser";

import { useDispatch } from "react-redux";

import { useEffect,useState } from "react";

import { getTickets } from "../slices/getTicketsSlices";

import Ticket from "./Ticket";

const TicketsPortfolioComponent = () => {
    const [portfolio,setPortfolio] = useState([])
    const dispatch = useDispatch([])
    const {idUser} = ContextDataUser()
    const urlPortfolio = `${import.meta.env.VITE_URL_TICKETS_PORTFOLIO}?idUser=${idUser}`

    const getPortfolio = async () => {
      const response = await dispatch(getTickets(urlPortfolio))
      setPortfolio(response.payload)

    }

    useEffect(() => {
      getPortfolio()
    },[urlPortfolio])

  return (
    <div className="tickets_container">
      {portfolio.length > 0 ? (
        portfolio.map((save,index) => <Ticket key={index} stock={save.stock}/>)
      ) : (
        <p className="load-ticket" >Ainda não há itens salvos</p>
      )}
    </div>
  )
}

export default TicketsPortfolioComponent