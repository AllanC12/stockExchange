import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ContextTicketsDataProvider } from "./context/ContextTickets";
import { ContextUserDataProvider } from "./context/ContextDataUser";
import { Provider } from "react-redux";
import { store } from "./store.js";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextUserDataProvider>
      <ContextTicketsDataProvider>
        <App />
      </ContextTicketsDataProvider>
    </ContextUserDataProvider>
  </Provider>
);
