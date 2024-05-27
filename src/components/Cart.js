import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return cartItems.map((item) => {
    return <div>{item.title || item.card.info.name}</div>;
  });
};

export default Cart;
