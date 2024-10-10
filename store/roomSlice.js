import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    activeRoom: null,
  },
  reducers: {
    setActiveRoom(state, action) {
      state.activeRoom = action.payload;
    },
  },
});

export const { setActiveRoom } = roomSlice.actions;
export default roomSlice.reducer;
