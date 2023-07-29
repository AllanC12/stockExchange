import Login from "../pages/Login"
import HomeBroker from "../pages/HomeBroker"
import App from "../App"

import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Login/>
            },
            {
                path: "/home_broker",
                element: <HomeBroker/>
            }
        ]
    }
])