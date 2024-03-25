import React from "react";
import { claudinaryImgCDN } from "../utils/constants";

const RestaurantMenuCarousel = ({ menuType }) => {
  return menuType?.card?.card?.carousel.map((item) => {
    return (
      <div className="bg-red-500">
        <img
          className="w-16"
          src={claudinaryImgCDN + item?.dish?.info?.imageId}
        />
        <div>
          <p>{item?.dish?.info?.name}</p>
          <p>{item?.dish?.info?.description}</p>
        </div>
        <div>
          <p>
            ₹
            {item?.dish?.info?.defaultPrice / 100 ||
              item?.dish?.info?.price / 100}
          </p>
          <button>add</button>
          <div>
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>
      </div>
    );
  });
};

export default RestaurantMenuCarousel;
