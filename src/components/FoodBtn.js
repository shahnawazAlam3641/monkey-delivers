import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const FoodBtn = ({ item, price, deliveryFee }) => {
  item.itemPrice = price;
  item.itemDeliveryFee = deliveryFee;

  const [itemCount, setItemCount] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredFood = cartItems.filter((food) => {
      if (food?.title) {
        console.log("here buddy");
        return food?.title === item?.title;
      } else {
        return food?.card?.info?.name === item?.card?.info?.name;
      }
    });
    setItemCount(filteredFood.length);
  }, [cartItems]);

  return (
    <>
      <button
        className={`bg-green-400 px-4 py-1.5  rounded-md text-white hover:bg-green-500  ${
          itemCount ? "hidden" : "block"
        }`}
        onClick={() => {
          // const count = itemCount + 1;
          // setItemCount(count);
          dispatch(addItem(item));
          // const totalItem = cartItems.filter(
          //   (food) =>
          //     food?.title === item?.title ||
          //     food?.card?.info?.name === item?.card?.info?.name
          // );

          // console.log(totalItem);
          // setItemCount(totalItem.length);
          // handleAdd(item);
        }}
      >
        ADD
      </button>
      <div
        className={`flex items-center   bg-white justify-center rounded-md shadow-lg ${
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
              dispatch(removeItem(item));
            }
          }}
          className="py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg hover:bg-slate-200 rounded-l-md transition-all"
        >
          -
        </button>
        <p className="py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg transition-all">
          {itemCount}
        </p>
        <button
          onClick={() => {
            // const count = itemCount + 1;
            // setItemCount(count);
            dispatch(addItem(item));
            // const totalItem = cartItems.filter(
            //   (food) =>
            //     food?.title === item?.title ||
            //     food?.card?.info?.name === item?.card?.info?.name
            // );

            // console.log(totalItem);
            // setItemCount(totalItem.length);
            // handleAdd(item);
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
