import React, { useState } from "react";

import { claudinaryImgCDN } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/cartSlice";
import FoodBtn from "./FoodBtn";
import RatingStar from "../svg/RatingStar";

const RestaurantDish = ({ showItems, item }) => {
  return (
    <div
      className={`my-2  justify-between w-full max-w-[90vw] mx-auto p-4  rounded-lg ${
        showItems ? "flex" : "hidden"
      }   `}
    >
      <div className=" flex flex-col justify-center">
        <p className="text-xl font-semibold">{item?.card?.info?.name}</p>
        <p className="font-semibold">
          ₹
          {item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100}
        </p>
        <div
          className={` gap-1 items-center ${
            item?.card?.info?.ratings?.aggregatedRating?.rating
              ? "flex"
              : "hidden"
          }`}
        >
          <span>
            <RatingStar />
          </span>
          <p className="text-green-700 font-bold">
            {item?.card?.info?.ratings?.aggregatedRating
              ? item?.card?.info?.ratings?.aggregatedRating?.rating
              : null}
          </p>
          <p className="text-slate-600">
            ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
          </p>
        </div>
        <p className="text-slate-600">{item?.card?.info?.description}</p>
      </div>
      <div className=" flex flex-col justify-center items-center gap-1 min-w-32">
        <img
          className="w-32 h-32 min-w-32 min-h-32  object-cover rounded-lg"
          // src={claudinaryImgCDN + item?.card?.info?.imageId}
          src={
            !item?.card?.info?.imageId
              ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Icons-Autosuggest/AS_Cuisine_3x"
              : claudinaryImgCDN + item?.card?.info?.imageId
          }
        />

        <button className="bg-green-400 px-5 py-1  hidden rounded-md text-white shadow-lg hover:bg-green-600 ">
          ADD
        </button>

        <FoodBtn
          item={item}
          price={
            item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100
          }
        />
      </div>
    </div>
  );
};

export default RestaurantDish;
