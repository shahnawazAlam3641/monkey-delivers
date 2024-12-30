import React, { useEffect, useState } from "react";
import { MAIN_API, CUISINE_IMG_CDN } from "../utils/constants";
import RestaurantChains from "./RestaurantChains";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useNavigate } from "react-router-dom";
import { useApiUrls } from "../utils/useApiUrls";
import { useSelector } from "react-redux";
import ShimmerCard from "./ShimmerCard";
const BYPASS_CORS = import.meta.env.VITE_BYPASS_CORS_URL;

const Cuisines = () => {
  const [cuisines, setCuisines] = useState(null);
  const navigate = useNavigate();

  const onlineStatus = useOnlineStatus();

  const location = useSelector((store) => store.location);

  const urls = useApiUrls();

  useEffect(() => {
    getCuisines();
  }, [location]);

  async function getCuisines() {
    try {
      // console.log('https://corsproxy.org/?' + encodeURIComponent(MAIN_API))
      // const response = await fetch(
      //   "https://thingproxy.freeboard.io/fetch/" + MAIN_API
      // );
      const response = await fetch(BYPASS_CORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify({ url: urls?.MAIN_API }),
      });

      // const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(MAIN_API))
      // const response = await fetch(DEV_API)
      const json = await response.json();
      // console.log(json);
      setCuisines(json);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(onlineStatus);

  if (onlineStatus === false) {
    return <h1>uh ohhh... looks like you are offline</h1>;
  }

  if (!cuisines) {
    return (
      <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from(Array(12)).map((n, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }

  if (cuisines?.data?.cards[0]?.card?.card?.header) {
    console.log(cuisines);

    // const { title, info } = cuisines?.data?.cards[0]?.card?.card;

    const {
      header: { title },
      imageGridCards: { info },
      // eslint-disable-next-line no-unsafe-optional-chaining
    } = cuisines?.data?.cards[0]?.card?.card;

    return (
      <>
        <div className="max-w-[85%] mx-auto">
          <h2 className="text-[#171a29] text-2xl font-semibold">{title}</h2>

          <div className="flex overflow-x-scroll">
            {info.map((cuisine) => {
              // console.log(cuisine?.entityId?.split("=")[1]?.split("&")[0]);
              // console.log(cuisine?.entityId);

              let collectionId;

              // console.log(typeof NaN);

              if (!Number(cuisine?.entityId)) {
                // console.log("NaN");
                // console.log(cuisine?.entityId?.split("=")[1]?.split("&")[0]);
                collectionId = cuisine?.entityId?.split("=")[1]?.split("&")[0];
              } else {
                // console.log("Number");
                // console.log(cuisine?.entityId);
                collectionId = cuisine?.entityId;
              }
              return (
                <img
                  onClick={() => navigate(`/collection/${collectionId}`)}
                  className="w-40 cursor-pointer"
                  key={cuisine.id}
                  // src={CUISINE_IMG_CDN + cuisine.imageId}
                  src={
                    !cuisine.imageId
                      ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Icons-Autosuggest/AS_Cuisine_3x"
                      : CUISINE_IMG_CDN + cuisine.imageId
                  }
                />
              );
            })}
          </div>
        </div>
        <br /> <br />
        <div className="w-[85%] h-[2px] bg-[#F0F0F5] mx-auto"></div>
        <RestaurantChains cuisine={cuisines} />
        <span
          onClick={() => navigate("/search")}
          className="bg-orange-400 p-2 cursor-pointer hover:scale-95 transition-all duration-200 text-lg font-bold text-white rounded-md w-fit mx-auto"
        >
          Search Your Craving
        </span>
      </>
    );
  }

  if (cuisines?.data?.cards[0]?.card?.card?.title) {
    console.log(cuisines);

    // const { title, info } = cuisines?.data?.cards[0]?.card?.card;

    // const {
    //   restaurants,
    //   // eslint-disable-next-line no-unsafe-optional-chaining
    // } = cuisines?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;

    return (
      <>
        {/* <div className="max-w-[85%] mx-auto">
          <h2 className="text-[#171a29] text-2xl font-semibold">{title}</h2>

          <div className="flex overflow-x-scroll">
            {info.map((cuisine) => {
              // console.log(cuisine?.entityId?.split("=")[1]?.split("&")[0]);
              // console.log(cuisine?.entityId);

              let collectionId;

              // console.log(typeof NaN);

              if (!Number(cuisine?.entityId)) {
                // console.log("NaN");
                // console.log(cuisine?.entityId?.split("=")[1]?.split("&")[0]);
                collectionId = cuisine?.entityId?.split("=")[1]?.split("&")[0];
              } else {
                // console.log("Number");
                // console.log(cuisine?.entityId);
                collectionId = cuisine?.entityId;
              }
              return (
                <img
                  onClick={() => navigate(`/collection/${collectionId}`)}
                  className="w-40"
                  key={cuisine.id}
                  src={CUISINE_IMG_CDN + cuisine.imageId}
                />
              );
            })}
          </div>

        </div> */}
        <br /> <br />
        <div className="w-[85%] h-[2px] bg-[#F0F0F5] mx-auto"></div>
        <RestaurantChains cuisine={cuisines} />
        <span
          onClick={() => navigate("/search")}
          className="bg-orange-400 p-2 cursor-pointer hover:scale-95 transition-all duration-200 text-lg font-bold text-white rounded-md w-fit mx-auto"
        >
          Search Your Craving
        </span>
      </>
    );
  }
};

export default Cuisines;

// import React, { useEffect, useState } from 'react';
// import { MAIN_API } from '../constants';
// import { CUISINE_IMG_CDN } from '../constants';

// const Cuisines = () => {
//   const [cuisines, setCuisines] = useState({});

//   useEffect(() => {
//     async function getCuisines() {
//       try {
//         const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(MAIN_API));
//         const json = await response.json();
//         console.log("log json", json);
//         console.log("log cuisine bf update", cuisines);
//         setCuisines(json);
//         console.log("log cuisine af update", json); // Updated to log 'json' instead of 'cuisines'
//       } catch (error) {
//         console.error('Error fetching cuisines:', error);
//       }
//     }

//     getCuisines();
//   }, []); // Dependency array to ensure this effect runs only once on mount

//   return (
//     <div>
//       <div className='flex overflow-x-scroll'>
//         {/* Accessing cuisines directly here won't guarantee the updated state, use json instead */}
//         {/* {json.data.cards[0].card.card.imageGridCards.info.map((cuisine) => (
//           <img className='w-40' key={cuisine.id} src={CUISINE_IMG_CDN + cuisine.imageId} />
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default Cuisines;
