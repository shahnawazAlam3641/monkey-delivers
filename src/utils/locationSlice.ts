import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    lat: 22.5399241,
    long: 88.3874402,
    address: "Kolkata",
  },
  reducers: {
    setLocation: (state, action) => {
      const { lat, long, address } = action.payload;
      state.lat = lat;
      state.long = long;
      state.address = address;
      console.log("updated success");
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
