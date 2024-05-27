import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const FoodBtn = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredFood = cartItems.filter((food) => {
      if (food?.title) {
        return food?.title === item?.title;
      } else {
        return food?.card?.info?.name === item?.card?.info?.name;
      }
    });
    setItemCount(filteredFood.length);
  }, [cartItems]);

  return (
    <div className=" flex items-center   bg-white justify-center rounded-md shadow-lg  ">
      <button
        onClick={() => {
          if (itemCount === 0) {
            return;
          } else {
            const count = itemCount - 1;
            setItemCount(count);
            dispatch(removeItem());
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
  );
};

export default FoodBtn;
