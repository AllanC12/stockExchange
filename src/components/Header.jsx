import "./sass_components/NavBar.scss";

import { Link} from "react-router-dom";

const NavBar = () => {

  return (
    <header>
      <Link to="/home_broker"className="title">StockExchange</Link>
    </header>
  );
};

export default NavBar;
