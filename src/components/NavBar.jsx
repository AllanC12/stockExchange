import "./sass_components/NavBar.scss";

import logo from "../assets/logo.png";

import { useState } from "react";

import { ContextDataUser } from "../context/ContextDataUser";

const NavBar = () => {
  const {userLogged} = ContextDataUser()
  const [userName] = useState(JSON.parse(localStorage.getItem('userName')))

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logotipo" />
      </div>
      {userLogged ? (<span>Seja bem vindo {userName}</span>) : (<span></span>) }
      <h2 className="title">StockExchange</h2>
    </nav>
  );
};

export default NavBar;
