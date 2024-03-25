import React, { useState } from "react";
import { claudinaryImgCDN } from "../utils/constants";

const RestaurantMenuCategories = ({ menuType }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const [categoryAccordianOpen, setCategoryAccordianOpen] = useState(false);

  const handleAccordian = () => {
    console.log("clicked");
    setAccordianOpen(!accordianOpen);
  };

  const handleCategoryAccordian = () => {
    console.log("clicked");
    setCategoryAccordianOpen(!categoryAccordianOpen);
  };

  return (
    <>
      <h1 className="bg-blue-300" onClick={handleAccordian}>
        {menuType?.card?.card?.title}
      </h1>
      {menuType?.card?.card?.categories.map((categoryItem) => {
        return (
          <div className={`bg-yellow-300 ${accordianOpen ? "flex" : "hidden"}`}>
            <h1 onClick={handleCategoryAccordian}>{categoryItem?.title}</h1>
            <div className={`${categoryAccordianOpen ? "flex" : "hidden"}`}>
              {categoryItem?.itemCards.map((item) => {
                return (
                  <div>
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenuCategories;
