import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import getData from "../services/getTicketsService"

const initialState = {
  tickets: [],
  error: null,
  success: false,
  loading: false,
  message: null
}

export const getTickets = createAsyncThunk("tickets/getTickets", async (url)=>{
  const data = getData.getTickets(url)
  return data
})

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTickets.pending, (state) => {
         state.loading = true,
         state.success = false
        }).addCase(getTickets.fulfilled,(state,action) => {
         state.tickets = action.payload
         state.success = true,
         state.error = false,
         state.message = "Tickets carregados"
        }).addCase(getTickets.rejected,(state) => {
            state.loading = false,
            state.error = true,
            state.message = "Ocorreu um erro..."
        })
    }

})

export default ticketsSlice.reducer