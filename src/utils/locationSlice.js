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

      // console.log({ lat, long, address });

      state.lat = lat;
      state.long = long;

      state.address.main_text = address.main_text;
      state.address.secondary_text = address.secondary_text;
      console.log("updated success");
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
