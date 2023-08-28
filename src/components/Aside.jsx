import "./sass_components/Aside.scss"

import {FaWallet, FaSearch,FaBitcoin, FaHome, FaStar} from 'react-icons/fa'

import { Link } from "react-router-dom"

const Aside = () => {
  return (
    <aside>
      <div className="container_link">
        <Link><FaHome/> <br/> Início</Link>
       </div>    
      <div className="container_link">
        <Link to="portfolio"><FaWallet/> <br/> Minha Carteira</Link>
       </div>    
      <div className="container_link">
        <Link to="saves"><FaSearch/> <br/> Investimentos salvos</Link>
       </div>    
      <div className="container_link">
        <Link to="favorites"><FaStar/> <br/> Meus favoritos</Link>
       </div>    
      <div className="container_link">
        <Link><FaBitcoin/> <br/> Criptomoedas</Link>
       </div>    
    </aside>
  )
}

export default Aside