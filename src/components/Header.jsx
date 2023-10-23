import "./sass_components/NavBar.scss";

import logo from "../assets/logo.png";


const NavBar = () => {

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logotipo" />
      </div>
      <h2 className="title">StockExchange</h2>
    </header>
  );
};

export default NavBar;
