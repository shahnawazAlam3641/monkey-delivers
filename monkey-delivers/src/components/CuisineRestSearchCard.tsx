import React from "react";
import { useNavigate } from "react-router-dom";
import { claudinaryImgCDN } from "../utils/constants";

const CuisineRestSearchCard = ({ cuisineRest }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/restaurant/${cuisineRest?.card?.card?.info?.id}`)
      }
      className="flex w-full shadow-lg gap-4 p-2 items-center cursor-pointer"
    >
      <img
        className="w-24 aspect-square object-cover rounded-md"
        src={
          claudinaryImgCDN + cuisineRest?.card?.card?.info?.cloudinaryImageId
        }
      />
      <div className="flex flex-col ">
        <p className="text-gray-600 font-semibold text-lg">
          {cuisineRest?.card?.card?.info?.name}
        </p>
        <div className="flex ">
          <p className="text-gray-500 font-semibold text-sm">
            {cuisineRest?.card?.card?.info?.avgRating ||
              cuisineRest?.card?.card?.info?.avgRatingString}{" "}
            ({cuisineRest?.card?.card?.info?.totalRatingsString} ratings){" "}
          </p>
          {/* <p className="text-gray-500 font-semibold text-md">Azad </p>
          <p className="text-gray-500 font-semibold text-md">Azad</p> */}
        </div>
        <p className="text-gray-400 font-semibold text-sm">
          {cuisineRest?.card?.card?.info?.cuisines.map((cuisine) => {
            return <span> {cuisine},</span>;
          })}
        </p>
      </div>
    </div>
  );
};

export default CuisineRestSearchCard;
