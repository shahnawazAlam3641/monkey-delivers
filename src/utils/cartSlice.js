import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((food) => {
        if (food?.title) {
          return food.title === action.payload.title;
        } else if (food?.card?.info?.name) {
          return food?.card?.info?.name === action.payload.card?.info?.name;
        }
      });

      if (index !== -1) {
        state.items.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
