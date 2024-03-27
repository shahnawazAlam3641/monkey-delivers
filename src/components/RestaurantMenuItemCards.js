import React, { useState } from "react";
import { claudinaryImgCDN } from "../utils/constants";

const RestaurantMenuItemCards = ({ menuType }) => {
  const [accordianOpen, setAccordianOpen] = useState(true);

  const handleAccordian = () => {
    console.log("clicked");
    setAccordianOpen(!accordianOpen);
  };

  return (
    <>
      <h1 className="bg-blue-300" onClick={handleAccordian}>
        {menuType?.card?.card?.title}
      </h1>

      {menuType?.card?.card?.itemCards.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className={`bg-green-500 ${accordianOpen ? "flex" : "hidden"}`}
          >
            <div>
              <p>{item?.card?.info?.name}</p>
              <p>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div>
              <img
                className="w-16"
                src={claudinaryImgCDN + item?.card?.info?.imageId}
              />
              <button>add</button>
              <div>
                <button>-</button>
                <p>0</p>
                <button>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenuItemCards;
