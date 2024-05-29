import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.map((food, index) => {
        if (food?.title && food?.title === action.payload.title) {
          state.items.splice(index, 1);
        } else if (
          food?.card?.info?.name &&
          food?.card?.info?.name === action?.payload?.card?.info?.name
        ) {
          state.items.splice(index, 1);
        }
      });

      // state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
