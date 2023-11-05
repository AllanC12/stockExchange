import "./sass_components/Aside.scss";

import { FaWallet, FaSearch, FaPowerOff, FaHome, FaStar } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { ContextDataUser } from "../context/ContextDataUser";

const Aside = () => {

  const { logout} = ContextDataUser()

  return (
    <aside>
      <div className="container_link">
        <NavLink to="https://allanc12.github.io/stockExchange/home_broker">
          <FaHome /> <br /> Início
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="https://allanc12.github.io/stockExchange/portfolio">
          <FaWallet /> <br /> Minha Carteira
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="https://allanc12.github.io/stockExchange/saves">
          <FaSearch /> <br /> Investimentos salvos
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="https://allanc12.github.io/stockExchange/favorites">
          <FaStar /> <br /> Meus favoritos
        </NavLink>
      </div>
      <div className="container_link logout">
        <NavLink onClick={logout} to="https://allanc12.github.io/stockExchange/">
          <FaPowerOff /> <br /> Desconectar
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
