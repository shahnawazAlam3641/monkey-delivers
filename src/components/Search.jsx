import { useState, useEffect } from "react";
const BYPASS_CORS = import.meta.env.VITE_BYPASS_CORS_URL;
import {
  PRE_SEARCH_API,
  SEARCH_CUISINE_API,
  SEARCH_DISH_API,
} from "../utils/constants";
import { claudinaryImgCDN } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import FoodBtn from "./FoodBtn";
import DishSearchCard from "./DishSearchCard";
import CuisineRestSearchCard from "./CuisineRestSearchCard";
import SearchShimmer from "./SearchShimmer";
import { useApiUrls } from "../utils/useApiUrls";
import LoadingGif from "../assets/Food Loader - GIF Animation.gif";

const Search = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [preSearchCuisines, setPreSearchCuisines] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [searchCuisine, setSearchCuisine] = useState(null);
  const [sugg, setSugg] = useState(null);
  const [loading, setLoading] = useState(false);

  const urls = useApiUrls();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getCuisines();
  }, []);

  async function getCuisines() {
    const response = await fetch(BYPASS_CORS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
      body: JSON.stringify({ url: urls?.PRE_SEARCH_API }),
    });

    const json = await response.json();
    setPreSearchCuisines(json);
  }

  useEffect(() => {
    setDishes(null);
    setSearchCuisine(null);
    if (searchText.length > 1) {
      const searchTimeOut = setTimeout(() => {
        getSearchSugg();
      }, 300);

      return () => clearInterval(searchTimeOut);
    }
  }, [searchText]);

  const getDishes = async (dish) => {
    try {
      setLoading(true);
      const response = await fetch(BYPASS_CORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urls?.SEARCH_DISH_API(dish) }),
      });
      const data = await response.json();
      setDishes(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getSearchCuisine = async (cuisine) => {
    try {
      setLoading(true);
      const response = await fetch(BYPASS_CORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urls?.SEARCH_CUISINE_API(cuisine) }),
      });
      const data = await response.json();

      setSearchCuisine(
        data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  async function getSearchSugg() {
    try {
      setLoading(true);
      const response = await fetch(BYPASS_CORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urls?.SEARCH_SUGG_API(searchText) }),
      });

      const json = await response.json();
      setSugg(json);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  if (preSearchCuisines) {
    const {
      header: { title },
      gridElements: {
        infoWithStyle: { info },
      },
    } = preSearchCuisines?.data?.cards[1]?.card?.card;

    return (
      <div className="w-[800px] max-w-[90%] mx-auto flex flex-col gap-8 p-4">
        <div className="relative mx-auto mt-8 w-[100%] flex justify-center gap-2">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            className="rounded-lg w-full border-2 p-3  "
            placeholder="Search for Restaurants and Food"
          />
          {searchText.length > 0 ? (
            <svg
              onClick={() => setSearchText("")}
              className="absolute right-4 cursor-pointer top-1/2 w-4 -translate-y-1/2 "
              fill="#313131"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          ) : null}
        </div>

        {loading && (
          <div className="w-full">
            {Array.from(Array(10)).map((n, index) => {
              return <SearchShimmer key={index} />;
            })}
          </div>
        )}

        {dishes && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dishes.map((dish, index) => {
              if (index > 0) {
                return <DishSearchCard dish={dish} />;
              }
            })}
          </div>
        )}

        {searchCuisine && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {searchCuisine.map((cuisineRest) => {
              return <CuisineRestSearchCard cuisineRest={cuisineRest} />;
            })}
          </div>
        )}

        {sugg && (
          <div
            className={`flex flex-col gap-4 items-center ${
              searchText ? "flex" : "hidden"
            }`}
          >
            {sugg.data.suggestions.map((suggestion, index) => {
              return (
                <div
                  onClick={() => {
                    if (suggestion?.type == "RESTAURANT") {
                      navigate(
                        `/restaurant/${
                          suggestion?.metadata?.split(":")[4]?.split(",")[0]
                        }`
                      );
                    }

                    if (suggestion?.type == "DISH") {
                      getDishes(suggestion?.text);
                    }

                    if (suggestion?.type == "CUISINE") {
                      getSearchCuisine(suggestion?.text);
                    }

                    setSugg(null);
                  }}
                  key={index}
                  className="w-[80%] flex gap-4 p-2 cursor-pointer transition-all duration-200 hover:bg-slate-200 rounded-md"
                >
                  <img
                    src={
                      !suggestion.cloudinaryId
                        ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Icons-Autosuggest/AS_Cuisine_3x"
                        : claudinaryImgCDN + suggestion.cloudinaryId
                    }
                    alt="Suggestion"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <p>{suggestion.text}</p>
                    <p className="text-gray-500 text-[0.8rem]">
                      {suggestion.type}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div
          className={`flex flex-col gap-6 ${searchText ? "hidden" : "flex"}`}
        >
          <h2 className="text-[#171a29] text-3xl font-bold">{title}</h2>

          <div className="flex  overflow-scroll overflow-y-hidden">
            {info.map((searchCuisine) => {
              return (
                <img
                  onClick={() =>
                    setSearchText(
                      searchCuisine?.entityId
                        .split("=")[1]
                        .split("%20")
                        .join(" ")
                    )
                  }
                  key={searchCuisine.id}
                  className="w-24 cursor-pointer"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                    searchCuisine.imageId
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <img src={LoadingGif} alt="Loading" className="w-96 m-auto" />;
  }
};

export default Search;
