import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { claudinaryImgCDN } from "../../utils/constants";

const RestaurantChains = ({ cuisine }) => {
  const [all, setAll] = useState(true);
  const [rating, setRating] = useState(false);
  const [fast, setFast] = useState(false);

  const handleAll = () => {
    if (!all) {
      setAll(true);
      setFast(false);
      setRating(false);
    }
  };

  const handleRating = () => {
    if (!rating) {
      setAll(false);
      setFast(false);
      setRating(true);
    }
  };

  const handleFast = () => {
    if (!fast) {
      setAll(false);
      setFast(true);
      setRating(false);
    }
  };

  let restaurants = [];

  if (
    cuisine?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  ) {
    const restaurantArray =
      cuisine?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    restaurants = [...restaurantArray];
  }

  if (
    cuisine?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  ) {
    const restaurantArray =
      cuisine?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    restaurants = [...restaurantArray];
  }

  return (
    <div className="flex flex-col scroll-smooth" id="restaurants">
      <div className="max-w-[85%] mx-auto my-10 text-[#171a29] font-bold text-3xl">
        {cuisine?.data?.cards[2]?.card?.card?.title}
      </div>
      <div className="mx-auto flex gap-3">
        <button
          className={`border rounded-full shadow-sm py-2 px-5  ${
            all ? "bg-gray-300" : ""
          }`}
          onClick={handleAll}
        >
          All
        </button>
        <button
          className={`border rounded-full shadow-sm p-2 ${
            rating ? "bg-gray-300" : ""
          }`}
          onClick={handleRating}
        >
          Ratings 4.0+
        </button>
        <button
          className={`border rounded-full shadow-sm p-2 ${
            fast ? "bg-gray-300" : ""
          }`}
          onClick={handleFast}
        >
          Fast Delivery
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[80%] mx-auto  gap-[3.8rem]  mt-10 ">
        {all &&
          restaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            );
          })}

        {rating &&
          restaurants
            .filter((restaurant) => {
              return restaurant?.info?.avgRating >= 4;
            })
            .map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard restaurant={restaurant} />
                </Link>
              );
            })}

        {fast &&
          restaurants
            .filter((restaurant) => {
              return restaurant?.info?.sla?.deliveryTime <= 25;
            })
            .map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard restaurant={restaurant} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default RestaurantChains;
