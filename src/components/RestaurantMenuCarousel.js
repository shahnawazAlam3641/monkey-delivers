import React from "react";
import { claudinaryImgCDN } from "../utils/constants";

const RestaurantMenuCarousel = ({ menuType }) => {
  return (
    <div className="w-[850px] max-w-[90%] mx-auto my-6 flex overflow-x-scroll">
      {menuType?.card?.card?.carousel.map((item) => {
        {
          console.log(item);
        }
        return (
          <div className="relative m-4 min-w-64 " key={item?.bannerId}>
            <img
              className="rounded-lg w-64 h-72 object-cover"
              src={claudinaryImgCDN + item?.dish?.info?.imageId}
            />
            <div className="absolute top-0">
              <p className="mx-4 mt-4 text-lg font-semibold text-white shadow-2xl">
                {item?.dish?.info?.name}
              </p>
              {/* <p className="mx-4 text-gray-200 text-xs drop-shadow-2xl">
                {item?.dish?.info?.description}
              </p> */}
            </div>
            <div className="absolute bottom-0 w-full flex  justify-between items-center">
              <p className="text-white m-4 text-lg font font-semibold">
                ₹
                {item?.dish?.info?.defaultPrice / 100 ||
                  item?.dish?.info?.price / 100}
              </p>

              <button className="bg-green-400 px-4 py-2 m-4 rounded-md text-white hover:bg-green-600 hidden">
                ADD
              </button>

              <div className="m-4 flex items-center  bg-white justify-center rounded-md">
                <button className="p-3 text-green-400 font-semibold text-lg hover:bg-slate-200 rounded-l-md transition-all">
                  -
                </button>
                <p className="p-3 text-green-400 font-semibold text-lg transition-all">
                  0
                </p>
                <button className="p-3 text-green-400 font-semibold text-lg hover:bg-slate-200 rounded-r-md transition-all">
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuCarousel;
