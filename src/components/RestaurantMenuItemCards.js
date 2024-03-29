import React, { useState } from "react";
import { claudinaryImgCDN } from "../utils/constants";

const RestaurantMenuItemCards = ({ menuType }) => {
  const [accordianOpen, setAccordianOpen] = useState(true);

  const handleAccordian = () => {
    console.log("clicked");
    setAccordianOpen(!accordianOpen);
  };

  return (
    <div className="w-[850px] max-w-[90vw] mx-auto my-6  ">
      <div className="w-full bg-slate-200 h-3 mb-3"></div>
      <div
        className="flex justify-between items-center p-2  "
        onClick={handleAccordian}
      >
        <p className="font-bold text-lg">
          {menuType?.card?.card?.title} (
          {menuType?.card?.card?.itemCards.length})
        </p>

        <svg
          className={`${accordianOpen ? "rotate-180" : "rotate-0"} `}
          aria-hidden="true"
          height="16"
          width="16"
        >
          <g opacity=".8" fill="[#3D4045]" stroke="[#3D4045]" strokeWidth=".2">
            <path
              d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402.46 0 .789-.223.992-.402a5.43 5.43 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106Z"
              fill="var(--fill-color)"
              fillOpacity=".92"
            />
          </g>
        </svg>

        {/* <svg
          className={`${
            accordianOpen ? "flex" : "hidden"
          } justify-center items-center`}
          aria-hidden="true"
          height="24"
          width="24"
        >
          <g opacity=".8" fill="[#3D4045]" stroke="[#3D4045]" strokeWidth=".2">
            <path
              d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402.46 0 .789-.223.992-.402a5.43 5.43 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106Z"
              fill="var(--fill-color)"
              fillOpacity=".92"
              transform="rotate(180 12 12)"
            />
          </g>
        </svg> */}
      </div>

      {menuType?.card?.card?.itemCards.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="shadow-md rounded-lg">
            <div
              className={`my-2  justify-between w-full max-w-[90vw] mx-auto p-4  rounded-lg ${
                accordianOpen ? "flex" : "hidden"
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      role="img"
                      aria-hidden="true"
                      strokecolor="rgba(2, 6, 12, 0.92)"
                      fillcolor="rgba(2, 6, 12, 0.92)"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                      />
                      <path
                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="StoreRating20_svg__paint0_linear_32982_71567"
                          x1="10"
                          y1="1"
                          x2="10"
                          y2="19"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#21973B" />
                          <stop offset="1" stopColor="#128540" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <p className="text-green-700 font-bold">
                    {item?.card?.info?.ratings?.aggregatedRating
                      ? item?.card?.info?.ratings?.aggregatedRating?.rating
                      : null}
                  </p>
                  <p className="text-slate-600">
                    ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                  </p>
                </div>
                <p className="text-slate-600">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center gap-1 min-w-32">
                {item?.card?.info?.imageId ? (
                  <img
                    className="w-32 h-32 min-w-32 min-h-32  object-cover rounded-lg"
                    src={claudinaryImgCDN + item?.card?.info?.imageId}
                  />
                ) : null}

                {/* <img
                  className="w-32 h-32 min-w-32 min-h-32  object-cover rounded-lg"
                  src={claudinaryImgCDN + item?.card?.info?.imageId}
                /> */}
                <button className="bg-green-400 px-5 py-1  hidden rounded-md text-white shadow-lg hover:bg-green-600 ">
                  ADD
                </button>
                <div className=" flex items-center   bg-white justify-center rounded-md shadow-lg  ">
                  <button className="py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg hover:bg-slate-200 rounded-l-md transition-all">
                    -
                  </button>
                  <p className="py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg transition-all">
                    0
                  </p>
                  <button className="py-1 px-2 flex justify-center items-center text-green-400 font-semibold text-lg hover:bg-slate-200 rounded-r-md transition-all">
                    +
                  </button>
                </div>
              </div>
            </div>
            {/* <div
              className={`w-full bg-slate-200 h-[1px] ${
                accordianOpen ? "flex" : "hidden"
              }`}
            ></div> */}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItemCards;
