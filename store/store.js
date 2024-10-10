// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
import ServerReducer from './serverSlice'
import RoomReducer from "./roomSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    server: ServerReducer,
    room: RoomReducer
  },
});
