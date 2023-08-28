import FormRegister from "../pages/FormRegister"
import FormLogin from "../pages/FormLogin"
import HomeBroker from "../pages/HomeBroker"
import TicketsSaves from "../pages/TicketsSaves";
import App from "../App";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FormLogin />,
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
        path: "home_broker/saves",
        element: <TicketsSaves />,
      },
    ],
  },
]);