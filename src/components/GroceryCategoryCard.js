import React from "react";
import { claudinaryImgCDN } from "../utils/constants";

const GroceryCategoryCard = ({ card }) => {
  //   console.log(props);
  return (
    <div className="w-24  flex flex-col justify-center items-center transition-all  duration-500 hover:scale-105">
      <img
        className="h-24 w-24 object-cover"
        src={claudinaryImgCDN + card?.imageId}
      />
      <p className="text-xs text-center">{card?.displayName}</p>
    </div>
  );
};

export default GroceryCategoryCard;
