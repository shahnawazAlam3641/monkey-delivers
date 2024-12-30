import React, { useState } from "react";
import { claudinaryImgCDN } from "../../utils/constants";
import FoodBtn from "./FoodBtn";
import DropdownArrow from "../svg/DropdownArrow";
import RatingStar from "../svg/RatingStar";

const RestaurantMenuCategories = ({ menuType }) => {
  const [categoryAccordianOpen, setCategoryAccordianOpen] = useState({});

  const handleCategoryAccordian = (itemTitle) => {
    setCategoryAccordianOpen((previousState) => {
      const newState = { ...previousState };
      newState[itemTitle] = !previousState[itemTitle];
      return newState;
    });
  };

  return (
    <div className="w-[850px] max-w-[90vw] mx-auto my-6 ">
      <div className="w-full bg-slate-200 h-3"></div>

      <h1 className="font-bold text-lg p-2 ">{menuType?.card?.card?.title}</h1>
      {menuType?.card?.card?.categories.map((categoryItem) => {
        const categoryId = categoryItem?.title;
        const isOpen = categoryAccordianOpen[categoryId];

        return (
          <div
            key={categoryItem?.title}
            className="font-semibold text-lg p-2 flex flex-col gap-3 "
          >
            <div className="w-full bg-slate-200 h-[1px] flex"></div>

            <div
              className="flex justify-between items-center   "
              onClick={() => {
                handleCategoryAccordian(categoryItem.title);
              }}
            >
              <p className="font-semibold text-lg">
                {categoryItem?.title} ({categoryItem?.itemCards.length})
              </p>

              <DropdownArrow isOpen={isOpen} />
            </div>

            <div className={`${isOpen ? "block" : "hidden"} `}>
              {categoryItem?.itemCards.map((item) => {
                return (
                  <div key={item?.card?.info?.id}>
                    <div
                      className={`my-2  justify-between w-full max-w-[90vw] mx-auto p-4 shadow-md rounded-lg ${
                        isOpen ? "flex" : "hidden"
                      }   `}
                    >
                      <div className=" flex flex-col justify-center">
                        <p className="text-xl font-semibold">
                          {item?.card?.info?.name}
                        </p>
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
                              ? item?.card?.info?.ratings?.aggregatedRating
                                  ?.rating
                              : null}
                          </p>
                          <p className="text-slate-600 text-sm">
                            (
                            {
                              item?.card?.info?.ratings?.aggregatedRating
                                ?.ratingCount
                            }
                            )
                          </p>
                        </div>
                        <p className="text-slate-600 text-sm">
                          {item?.card?.info?.description}
                        </p>
                      </div>
                      <div className=" flex flex-col justify-center items-center gap-1 ">
                        <img
                          className="w-32 h-32 min-w-32 min-h-32  object-cover rounded-lg"
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
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuCategories;
