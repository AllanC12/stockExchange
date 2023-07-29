import {configureStore} from "@reduxjs/toolkit"
import ticketsReducer from "./slices/getTicketsSlices"

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer
    }
})