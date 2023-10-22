import "./sass_components/NavBar.scss";

import logo from "../assets/logo.png";


const NavBar = () => {

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logotipo" />
      </div>
      <h2 className="title">StockExchange</h2>
    </nav>
  );
};

export default NavBar;
