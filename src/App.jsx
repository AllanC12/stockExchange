import "./App.css";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { ContextTicketsDataProvider } from "./context/ContextTickets";
import { ContextUserDataProvider } from "./context/ContextDataUser";

function App() {
  return (
    <div className="App">
      <ContextUserDataProvider>
        <ContextTicketsDataProvider>
          <NavBar />
          <Outlet />
          <Footer />
        </ContextTicketsDataProvider>
      </ContextUserDataProvider>
    </div>
  );
}

export default App;
