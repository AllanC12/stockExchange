import "./sass_components/Aside.scss"

import {FaWallet, FaSearch,FaBitcoin, FaHome} from 'react-icons/fa'

import { Link } from "react-router-dom"

const Aside = () => {
  return (
    <aside>
      <div className="container_link">
        <Link><FaHome/> <br/> Início</Link>
       </div>    
      <div className="container_link">
        <Link><FaWallet/> <br/> Minha Carteira</Link>
       </div>    
      <div className="container_link">
        <Link><FaSearch/> <br/> Investimentos à analisar</Link>
       </div>    
      <div className="container_link">
        <Link><FaBitcoin/> <br/> Criptomoedas</Link>
       </div>    
    </aside>
  )
}

export default Aside