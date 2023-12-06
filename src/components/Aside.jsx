import "./sass_components/Aside.scss";

import { FaBookmark, FaCheck, FaPowerOff, FaHome} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { ContextDataUser } from "../context/ContextDataUser";

const Aside = () => {

  const { logout} = ContextDataUser()

  return (
    <aside>
      <div className="container_link">
        <NavLink to="/home_broker" title="Início" >
          <FaHome /> 
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="/portfolio" title="Minha carteira">
          <FaCheck /> <br />  
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="/saves" title="Tickets salvos" >
          <FaBookmark /> <br /> 
        </NavLink>
      </div>
      <div className="container_link logout">
        <NavLink title="Desconectar" onClick={logout} to="/">
          <FaPowerOff /> <br />  
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
