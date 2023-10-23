import "./App.css";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ContextTicketsDataProvider } from "./context/ContextTickets";
import { ContextUserDataProvider } from "./context/ContextDataUser";

import FormRegister from "./pages/FormRegister";
import FormLogin from "./pages/FormLogin";
import HomeBroker from "./pages/HomeBroker";
import TicketsSaves from "./pages/TicketsSaves";
import TicketsFavorites from "./pages/TicketsFavorites";
import TicketsPortfolio from "./pages/TicketsPortfolio";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ContextUserDataProvider>
        <ContextTicketsDataProvider>
          <Header />
            <Outlet />
          <Footer />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FormLogin />} />
              <Route path="/home_broker" element={<HomeBroker/>}/>
              <Route path="/portfolio" element={<TicketsPortfolio/>}/>
              <Route path="/tickets_saves" element={<TicketsSaves/>}/>
              <Route path="/tickets_favorites"element={<TicketsFavorites/>}/>
            </Routes>
          </BrowserRouter>
        </ContextTicketsDataProvider>
      </ContextUserDataProvider>
    </div>
  );
}

export default App;
