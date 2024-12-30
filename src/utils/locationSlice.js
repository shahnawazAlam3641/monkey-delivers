import { createSlice } from "@reduxjs/toolkit";

const initState = JSON.parse(localStorage.getItem("location")) || {
  lat: 22.5399241,
  long: 88.3874402,
  address: {
    main_text: "Kolkata",
    secondary_text: "West Bengal",
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState: initState,
  reducers: {
    setLocation: (state, action) => {
      const { lat, long, address } = action.payload;

      state.lat = lat;
      state.long = long;

      state.address.main_text = address.main_text;
      state.address.secondary_text = address.secondary_text;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
