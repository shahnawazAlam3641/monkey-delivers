import React from "react";

import { claudinaryImgCDN } from "../../utils/constants";
import RatingStar from "../svg/RatingStar";

const RestaurantCard = ({ restaurant }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    avgRating,
    cuisines,
    sla: { slaString },
  } = restaurant?.info;

  return (
    <div className="cursor-pointer flex flex-col w-56 overflow-scroll truncate transition-all  duration-200 hover:scale-95  ">
      <img
        className="w-56 h-36 object-cover rounded-lg"
        src={
          !cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Icons-Autosuggest/AS_Cuisine_3x"
            : claudinaryImgCDN + cloudinaryImageId
        }
      />
      <p className="font-bold text-ellipsis">{name}</p>
      <p className="flex items-center gap-1 font-semibold">
        <RatingStar />
        {avgRating} • {slaString}
      </p>
      <p className="text-[#00000085] ">{cuisines.join(", ")}</p>

      <p className="text-[#00000085] ">{locality}</p>
    </div>
  );
};

export default RestaurantCard;
