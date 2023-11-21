import "./sass_components/Aside.scss";

import { FaWallet, FaSearch, FaPowerOff, FaHome, FaStar } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { ContextDataUser } from "../context/ContextDataUser";

const Aside = () => {

  const { logout} = ContextDataUser()

  return (
    <aside>
      <div className="container_link">
        <NavLink to="/home_broker">
          <FaHome /> 
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="/portfolio">
          <FaWallet /> <br />  
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="/saves">
          <FaSearch /> <br /> 
        </NavLink>
      </div>
      <div className="container_link">
        <NavLink to="/favorites">
          <FaStar /> <br />  
        </NavLink>
      </div>
      <div className="container_link logout">
        <NavLink onClick={logout} to="/">
          <FaPowerOff /> <br />  
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
