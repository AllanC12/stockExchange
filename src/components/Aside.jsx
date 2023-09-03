import "./sass_components/Aside.scss"

import {FaWallet, FaSearch,FaBitcoin, FaHome, FaStar} from 'react-icons/fa'

import { NavLink } from "react-router-dom"

const Aside = () => {
  return (
    <aside>
      <div className="container_link">
        <NavLink to="/home_broker"><FaHome/> <br/> Início</NavLink>
       </div>    
      <div className="container_link">
        <NavLink to="/portfolio"><FaWallet/> <br/> Minha Carteira</NavLink>
       </div>    
      <div className="container_link">
        <NavLink to="/saves"><FaSearch/> <br/> Investimentos salvos</NavLink>
       </div>    
      <div className="container_link">
        <NavLink to="/favorites"><FaStar/> <br/> Meus favoritos</NavLink>
       </div>    
      <div className="container_link">
        <NavLink to="/cripto"><FaBitcoin/> <br/> Criptomoedas</NavLink>
       </div>    
    </aside>
  )
}

export default Aside