import React from "react";
import { claudinaryImgCDN } from "../utils/constants";
import FoodBtn from "./FoodBtn";

const RestaurantMenuCarousel = ({ menuType }) => {
  return (
    <div className="w-[850px] max-w-[90%] mx-auto my-6 flex overflow-x-scroll ">
      {menuType?.card?.card?.carousel.map((item) => {
        return (
          <div className="relative m-4 min-w-64 " key={item?.bannerId}>
            <div className="absolute top-0 rounded-lg right-0 left-0 bottom-0 bg-[#00000061]"></div>
            <img
              className="rounded-lg w-64 h-72 object-cover"
              src={
                !item?.dish?.info?.imageId
                  ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Icons-Autosuggest/AS_Cuisine_3x"
                  : claudinaryImgCDN + item?.dish?.info?.imageId
              }
            />
            <div className="absolute top-0 z-10">
              <p className="mx-4 mt-4 text-lg font-semibold text-white shadow-2xl">
                {item?.dish?.info?.name}
              </p>
            </div>
            <div className="absolute z-10 bottom-0 w-full flex  justify-between items-center pr-4">
              <p className="text-white m-4 text-lg font font-semibold">
                ₹
                {item?.dish?.info?.defaultPrice / 100 ||
                  item?.dish?.info?.price / 100}
              </p>

              <FoodBtn
                item={item}
                price={
                  item?.dish?.info?.defaultPrice / 100 ||
                  item?.dish?.info?.price / 100
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuCarousel;
