import React, { useState } from "react";
import { claudinaryImgCDN } from "../utils/constants";

const RestaurantMenuCategories = ({ menuType }) => {
  // const [accordianOpen, setAccordianOpen] = useState(false);

  const [categoryAccordianOpen, setCategoryAccordianOpen] = useState({});

  // const handleAccordian = () => {
  //   console.log("clicked");
  //   setAccordianOpen(!accordianOpen);
  // };

  const handleCategoryAccordian = (itemTitle) => {
    console.log("clicked");
    setCategoryAccordianOpen((previousState) => {
      const newState = { ...previousState };
      newState[itemTitle] = !previousState[itemTitle];
      return newState;
    });
  };

  return (
    <div className="w-[850px] max-w-[90vw] mx-auto my-6 ">
      {/* <h1 className="bg-blue-300" onClick={handleAccordian}>
        {menuType?.card?.card?.title}
      </h1> */}

      <div className="w-full bg-slate-200 h-3"></div>

      <h1 className="font-bold text-lg p-2 ">{menuType?.card?.card?.title}</h1>
      {menuType?.card?.card?.categories.map((categoryItem) => {
        const categoryId = categoryItem?.title;
        const isOpen = categoryAccordianOpen[categoryId]; // Check if the accordion is open

        {
          /* const isOpen = categoryAccordianOpen[categoryItem.title]; */
        }
        return (
          <div
            key={categoryItem?.title}
            className="font-semibold text-lg p-2 flex flex-col gap-3 "
          >
            {/* <div
              onClick={() => {
                handleCategoryAccordian(categoryItem.title);
              }}
            >
              {console.log(categoryItem)}
              <span>{categoryItem?.title}</span>
              <span>({categoryItem?.itemCards.length})</span>
            </div> */}

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

              <svg
                className={`${isOpen ? "rotate-180" : "rotate-0"} `}
                aria-hidden="true"
                height="16"
                width="16"
              >
                <g
                  opacity=".8"
                  fill="[#3D4045]"
                  stroke="[#3D4045]"
                  strokeWidth=".2"
                >
                  <path
                    d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402.46 0 .789-.223.992-.402a5.43 5.43 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106Z"
                    fill="var(--fill-color)"
                    fillOpacity=".92"
                  />
                </g>
              </svg>
            </div>

            <div className={`${isOpen ? "block" : "hidden"}`}>
              {categoryItem?.itemCards.map((item) => {
                return (
                  //here that copy sent
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
                        isOpen ? "flex" : "hidden"
                      }`}
                    ></div> */}
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

// import React, { useState } from "react";
// import { claudinaryImgCDN } from "../utils/constants";

// const RestaurantMenuCategories = ({ menuType }) => {
//   // State to track the open/close state of each category accordion
//   const [categoryAccordianOpen, setCategoryAccordianOpen] = useState({});

//   // Function to handle clicking on a category accordion
//   const handleCategoryAccordian = (categoryItemId) => {
//     // Toggle the open/close state of the clicked category accordion
//     setCategoryAccordianOpen((prevState) => {
//       const updatedState = { ...prevState }; // Create a copy of the previous state
//       updatedState[categoryItemId] = !prevState[categoryItemId]; // Toggle the value for the specific category item
//       return updatedState; // Return the updated state
//     });
//   };

//   return (
//     <>
//       {/* Render each category accordion */}
//       {menuType?.card?.card?.categories.map((categoryItem) => {
//         const categoryId = categoryItem?.title;
//         const isOpen = categoryAccordianOpen[categoryId]; // Check if the accordion is open

//         return (
//           <div key={categoryId} className={`bg-yellow-300`}>
//             {/* Clickable title of the category accordion */}
//             <h1 onClick={() => handleCategoryAccordian(categoryId)}>
//               {categoryItem?.title}
//             </h1>
//             {/* Content of the category accordion */}
//             <div className={`${isOpen ? "flex" : "hidden"}`}>
//               {categoryItem?.itemCards.map((item) => {
//                 return (
//                   <div key={item?.card?.info?.id}>
//                     {/* Display item details */}
//                     <div>
//                       <p>{item?.card?.info?.name}</p>
//                       <p>
//                         ₹
//                         {item?.card?.info?.price / 100 ||
//                           item?.card?.info?.defaultPrice / 100}
//                       </p>
//                       <p>{item?.card?.info?.description}</p>
//                     </div>
//                     {/* Display item image and controls */}
//                     <div>
//                       <img
//                         className="w-16"
//                         src={claudinaryImgCDN + item?.card?.info?.imageId}
//                       />
//                       <button>add</button>
//                       <div>
//                         <button>-</button>
//                         <p>0</p>
//                         <button>+</button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default RestaurantMenuCategories;
