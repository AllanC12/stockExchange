import "./sass_components/TicketsContainer.scss"

import { UseMyContext } from "../context/Context";
import Ticket from "./Ticket";

const TicketsPortfolioComponent = () => {

    const {states} = UseMyContext()
    const {bag} = states 

  return (
    <div className="tickets_container">
      {bag.length > 0 ? (
        bag.map((save,index) => <Ticket key={index} stock={save} />)
      ) : (
        <p>Ainda não há itens salvos</p>
      )}
    </div>
  )
}

export default TicketsPortfolioComponent