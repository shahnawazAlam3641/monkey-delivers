import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    lat: 21212121,
    long: 151515151,
  },
  reducers: {
    setLocation: (state, action) => {
      const { lat, long } = action.payload;
      state.lat = lat;
      state.long = long;
      console.log("updated success");
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
