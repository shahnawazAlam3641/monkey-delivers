import React, { useState } from "react";

import { claudinaryImgCDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import FoodBtn from "./FoodBtn";

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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              />
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="StoreRating20_svg__paint0_linear_32982_71567"
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B" />
                  <stop offset="1" stopColor="#128540" />
                </linearGradient>
              </defs>
            </svg>
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
