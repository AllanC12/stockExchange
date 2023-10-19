import "./sass_components/NavBar.scss";

import logo from "../assets/logo.png";

const NavBar = () => {
  const statusLogin = localStorage.getItem('userLogged')
  const userName = localStorage.getItem('userName')

  console.log(userName)
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logotipo" />
      </div>
      {statusLogin && <span>Seja bem vindo {userName}</span> }
      <h2 className="title">StockExchange</h2>
    </nav>
  );
};

export default NavBar;
