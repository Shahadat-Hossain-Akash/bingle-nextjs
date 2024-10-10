import { createSlice } from "@reduxjs/toolkit";

const serverSlice = createSlice({
  name: "server",
  initialState: {
    activeServer: null,
  },
  reducers: {
    setActiveServer(state, action) {
      state.activeServer = action.payload;
    },
  },
});

export const { setActiveServer } = serverSlice.actions;
export default serverSlice.reducer;
