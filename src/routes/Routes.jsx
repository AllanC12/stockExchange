import FormRegister from "../pages/FormRegister"
import FormLogin from "../pages/FormLogin"
import HomeBroker from "../pages/HomeBroker"
import TicketsSaves from "../pages/TicketsSaves";
import TicketsFavorites from "../pages/TicketsFavorites";
import TicketsPortfolio from "../pages/TicketsPortfolio";
import App from "../App";

import { createBrowserRouter } from "react-router-dom";

import { useState } from "react";


const MyRouter = () => {
  return createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element:<FormLogin /> ,
          },
          {
            path: "/register",
            element: <FormRegister />,
          },
          {
            path: "/home_broker",
            element: <HomeBroker />,
          },
          {
            path: "/saves",
            element: <TicketsSaves />,
          },
          {
            path: "/favorites",
            element: <TicketsFavorites/>,
          },
          {
            path: "/portfolio",
            element: <TicketsPortfolio/>,
          },
        ],
      },
    ]
  )
}

export default MyRouter