import "./sass_components/Aside.scss"

import {FaWallet} from 'react-icons/fa'

import { Link } from "react-router-dom"

const Aside = () => {
  return (
    <aside>
      <div className="container_link">
        <Link to="/minha_carteira">Minha Carteira <FaWallet/></Link>
       </div>    
      <div className="container_link">
        <Link to="/minha_carteira">Minha Carteira <FaWallet/></Link>
       </div>    
      <div className="container_link">
        <Link to="/minha_carteira">Minha Carteira <FaWallet/></Link>
       </div>    
    </aside>
  )
}

export default Aside