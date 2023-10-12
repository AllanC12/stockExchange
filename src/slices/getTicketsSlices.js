import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getData from "../services/getTicketsService";

const initialState = {
  tickets: [],
  error: null,
  success: false,
  loading: false,
};

export const handleTickets = createAsyncThunk(
  "tickets/getTickets",
  async (url) => {
    const data = await getData.handleTickets(url, "GET");
    return data;
  }
);
export const delTickets = createAsyncThunk("deleteTickets", async (url) => {
  const data = await getData.deleteTickets(url)
  return data
});

export const sendDataUser = createAsyncThunk(
  "tickets/sendDataUser",
  async ({ url, dataUser }) => {
    await getData.sendDataFromServer(url, dataUser);
  }
);

export const sendTicketUserSlice = createAsyncThunk(
  "tickets/sendTicketUser",
  async ({ url, stock, idUser }) => {
    await getData.sendDataFromServer(url, { stock, idUser });
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
      .addCase(handleTickets.pending, (state) => {
        (state.loading = true), (state.success = false);
      })
      .addCase(handleTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
        (state.success = true), (state.error = false);
        state.loading = false;
      })
      .addCase(handleTickets.rejected, (state) => {
        (state.loading = false), (state.error = true);
      })
      .addCase(sendDataUser.pending, (state) => {
        (state.loading = true), (state.success = false);
      })
      .addCase(sendDataUser.fulfilled, (state, action) => {
        state.tickets = action.payload;
        (state.success = true), (state.error = false), (state.loading = false);
      })
      .addCase(sendDataUser.rejected, (state) => {
        (state.loading = false), (state.error = true);
      })
      .addCase(sendTicketUserSlice.fulfilled, (state) => {
        state.success = true;
        state.error = false;
        state.loading = false;
      })
      .addCase(sendTicketUserSlice.rejected, (state) => {
        state.error = true;
        state.success = false;
        state.loading = false;
      })
      .addCase(sendTicketUserSlice.pending, (state) => {
        state.error = false;
        state.success = false;
        state.loading = true;
      });
  },
});

export default ticketsSlice.reducer;
