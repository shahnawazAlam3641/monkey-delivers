import React, { useEffect, useState } from "react";
import { MAIN_API, CUISINE_IMG_CDN } from "../utils/constants";
import RestaurantChains from "./RestaurantChains";
import useOnlineStatus from "../utils/useOnlineStatus";

const Cuisines = () => {
  const [cuisines, setCuisines] = useState(null);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    getCuisines();
  }, []);

  async function getCuisines() {
    // console.log('https://corsproxy.org/?' + encodeURIComponent(MAIN_API))
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/" + MAIN_API
    );

    // const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(MAIN_API))
    // const response = await fetch(DEV_API)
    const json = await response.json();

    setCuisines(json);
  }

  // console.log(onlineStatus);

  if (onlineStatus === false) {
    return <h1>uh ohhh... looks like youre offline</h1>;
  } else if (!cuisines) {
    return <h1>Loading.................</h1>;
  } else if (cuisines) {
    // console.log(cuisines?.data?.cards[0]?.card?.card);

    const {
      header: { title },
      imageGridCards: { info },
    } = cuisines?.data?.cards[0]?.card?.card;

    return (
      <>
        <div className="max-w-[85%] mx-auto">
          <h2 className="text-[#171a29] text-2xl font-semibold">{title}</h2>

          <div className="flex overflow-x-scroll">
            {info.map((cuisine) => {
              return (
                <img
                  className="w-40"
                  key={cuisine.id}
                  src={CUISINE_IMG_CDN + cuisine.imageId}
                />
              );
            })}
          </div>
        </div>
        <br /> <br />
        <div className="w-[85%] h-[2px] bg-[#F0F0F5] mx-auto"></div>
        <RestaurantChains cuisine={cuisines} />
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
