import "./App.css";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ContextDataUser } from "./context/ContextDataUser";

import FormRegister from "./pages/FormRegister";
import FormLogin from "./pages/FormLogin";
import HomeBroker from "./pages/HomeBroker";
import TicketsSaves from "./pages/TicketsSaves";
import TicketsFavorites from "./pages/TicketsFavorites";
import TicketsPortfolio from "./pages/TicketsPortfolio";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const {userLogged} = ContextDataUser()

  return (
    <div className="App">

          <Header />
            <Outlet />
          <Footer />
          <BrowserRouter basename="/app">
            <Routes>
              <Route path="https://allanc12.github.io/stockExchange/" element={<FormLogin />} />
              <Route path="https://allanc12.github.io/stockExchange/register" element={<FormRegister/>} />
              <Route path="https://allanc12.github.io/stockExchange/home_broker" element={userLogged ? <HomeBroker/> : <FormLogin/>}/>
              <Route path="https://allanc12.github.io/stockExchange/portfolio" element={userLogged ? <TicketsPortfolio/> : <FormLogin/>}/>
              <Route path="https://allanc12.github.io/stockExchange/saves" element={userLogged ? <TicketsSaves/> : <FormLogin/>}/>
              <Route path="https://allanc12.github.io/stockExchange/favorites"element={userLogged ? <TicketsFavorites/> : <FormLogin/>}/>
            </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
