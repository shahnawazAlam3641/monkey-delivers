import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";

const FoodBtn = ({ item, price, deliveryFee }) => {
  item.itemPrice = price;
  item.itemDeliveryFee = deliveryFee;

  const updatedItem = {
    ...item,
    itemPrice: price,
    itemDeliveryFee: deliveryFee,
  };

  const [itemCount, setItemCount] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredFood = cartItems.filter((food) => {
      if (food?.title) {
        return food?.title === updatedItem?.title;
      } else {
        return food?.card?.info?.name === updatedItem?.card?.info?.name;
      }
    });
    setItemCount(filteredFood.length);
  }, [cartItems]);

  return (
    <>
      <button
        className={`bg-green-400 px-4 py-1.5 w-fit  rounded-md text-white hover:bg-green-500  ${
          itemCount ? "hidden" : "block"
        }`}
        onClick={() => {
          dispatch(addItem(updatedItem));
        }}
      >
        ADD
      </button>
      <div
        className={` w-fit flex items-center   bg-white justify-center rounded-md shadow-lg ${
          itemCount ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            if (itemCount === 0) {
              return;
            } else {
              const count = itemCount - 1;
              setItemCount(count);
              dispatch(removeItem(updatedItem));
            }
          }}
          className=" py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg hover:bg-slate-200 rounded-l-md transition-all"
        >
          -
        </button>
        <p className="py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg transition-all">
          {itemCount}
        </p>
        <button
          onClick={() => {
            dispatch(addItem(updatedItem));
          }}
          className="py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg hover:bg-slate-200 rounded-r-md transition-all"
        >
          +
        </button>
      </div>
    </>
  );
};

export default FoodBtn;
