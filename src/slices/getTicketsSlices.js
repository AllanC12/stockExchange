import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getData from "../services/getTicketsService";


const initialState = {
  tickets: [],
  error: null,
  success: false,
  loading: false,
 };

export const getTickets = createAsyncThunk(
  "tickets/getTickets",
  async (url) => {
    const data = await getData.getTickets(url);
    return data;
  }
);

export const sendDataUser = createAsyncThunk(
  "tickets/sendDataUser",
  async ({ url, dataUser }) => {
    await getData.sendDataUser(url, dataUser);
  }
);

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => {
        state.loading = true,
        state.success = false;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
        state.success = true,
        state.error = false
       })
      .addCase(getTickets.rejected, (state) => {
        state.loading = false,
        state.error = true
       })
      .addCase(sendDataUser.pending, (state) => {
        state.loading = true,
        state.success = false;
       })
      .addCase(sendDataUser.fulfilled, (state, action) => {
        state.tickets = action.payload;
          state.success = true,
          state.error = false,
          state.loading = false          
      })
      .addCase(sendDataUser.rejected, (state) => {
        state.loading = false,
          state.error = true
      })
  },
});

export default ticketsSlice.reducer;
