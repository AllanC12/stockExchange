import "./sass_components/NavBar.scss";

import { useState } from "react";

import logo from "../assets/logo.png"

const NavBar = () => {
  const [statusUser, setStatusUser] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logotipo" />
      </div>
      {statusUser ? <p>Logado</p> : <p></p>}
    </nav>
  );
};

export default NavBar;
