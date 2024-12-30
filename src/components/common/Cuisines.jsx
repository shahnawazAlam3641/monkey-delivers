import { useEffect, useState } from "react";
import { CUISINE_IMG_CDN } from "../../utils/constants";
import RestaurantChains from "./RestaurantChains";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useNavigate } from "react-router-dom";
import { useApiUrls } from "../../utils/useApiUrls";
import { useSelector } from "react-redux";
import ShimmerCard from "../shimmer/ShimmerCard";
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
      const response = await fetch(BYPASS_CORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify({ url: urls?.MAIN_API }),
      });

      const json = await response.json();
      setCuisines(json);
    } catch (error) {
      console.log(error);
    }
  }

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
              let collectionId;

              if (!Number(cuisine?.entityId)) {
                collectionId = cuisine?.entityId?.split("=")[1]?.split("&")[0];
              } else {
                collectionId = cuisine?.entityId;
              }
              return (
                <img
                  onClick={() => navigate(`/collection/${collectionId}`)}
                  className="w-40 cursor-pointer"
                  key={cuisine.id}
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
    return (
      <>
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
