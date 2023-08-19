import Login from "../pages/Login"
import HomeBroker from "../pages/HomeBroker"
import FormRegister from "../components/FormRegister"
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
                path: '/register',
                element: <FormRegister/>
            },
            {
                path: "/home_broker",
                element: <HomeBroker/>
            }
        ]
    }
])