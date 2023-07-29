import Login from "../pages/Login"
import HomeBroker from "../pages/HomeBroker"

import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home_broker",
        element: <HomeBroker/>
    }
])