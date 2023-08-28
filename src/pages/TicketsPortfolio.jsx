import "./sass_pages/HomeBroker.scss"

import Aside from "../components/Aside";
import TicketsPortfolioComponent from "../components/TicketsPortfolioComponent"

const TicketsPortfolio = () => {
  return (
    <div className="container_ticket">
    <Aside/>
    <TicketsPortfolioComponent/>
  </div>
  )
}

export default TicketsPortfolio