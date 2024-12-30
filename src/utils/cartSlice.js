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
      const index = state.items.findIndex((food) => {
        if (food?.title) {
          console.log("title exists");
          return food.title === action.payload.title;
        } else if (food?.card?.info?.name) {
          console.log("name exists");
          return food?.card?.info?.name === action.payload.card?.info?.name;
        }
      });

      console.log(index);

      if (index !== -1) {
        state.items.splice(index, 1);
      }

      // state.items.map((food, index) => {
      //   if (food?.title && food?.title === action.payload.title) {
      //     console.log("if rann");
      //     return state.items.splice(index, 1);
      //   } else if (
      //     food?.card?.info?.name &&
      //     food?.card?.info?.name === action?.payload?.card?.info?.name
      //   ) {
      //     console.log("else rann");
      //     return state.items.splice(index, 1);
      //   }
      // });

      // state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
