import { useState, useEffect } from "react";
import { PRE_SEARCH_API, SEARCH_DISH_API } from "../utils/constants";
import { claudinaryImgCDN } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import FoodBtn from "./FoodBtn";
// import { SEARCH_SUGG_API } from '../constants'

const Search = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [preSearchCuisines, setPreSearchCuisines] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [sugg, setSugg] = useState(null);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getCuisines();
  }, []);

  async function getCuisines() {
    // console.log('https://corsproxy.org/?' + encodeURIComponent(PRE_SEARCH_API))
    // const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(PRE_SEARCH_API))
    // const response = await fetch(DEV_API)

    // const response = await fetch('https://thingproxy.freeboard.io/fetch/' + PRE_SEARCH_API)
    const response = await fetch(PRE_SEARCH_API);

    const json = await response.json();
    console.log(json);
    setPreSearchCuisines(json);
  }

  useEffect(() => {
    console.log(searchText.length > 1);
    setDishes([]);
    if (searchText.length > 1) {
      console.log("if else called");
      const searchTimeOut = setTimeout(() => {
        getSearchSugg();
      }, 300);

      return () => clearInterval(searchTimeOut);
    }
  }, [searchText]);

  const getDishes = async (dish) => {
    try {
      const response = await fetch(SEARCH_DISH_API + dish);
      const data = await response.json();
      console.log(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
      setDishes(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  async function getSearchSugg() {
    // const response = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/" +
    //     `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.7040592&lng=77.10249019999999&str=${searchText}&trackingId=undefined`
    // );

    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.7040592&lng=77.10249019999999&str=${searchText}&trackingId=undefined`
    );

    const json = await response.json();
    console.log(json);
    setSugg(json);
  }

  if (preSearchCuisines) {
    const {
      header: { title },
      gridElements: {
        infoWithStyle: { info },
      },
      // eslint-disable-next-line no-unsafe-optional-chaining
    } = preSearchCuisines?.data?.cards[1]?.card?.card;

    return (
      <div className=" max-w-[80%] mx-auto flex flex-col gap-8 p-4">
        <div className=" mx-auto mt-8 w-[100%] flex justify-center gap-2">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            className="rounded-lg w-[100%] max-w-[850px] border-2 p-3  "
            placeholder="Search for Restaurants and Food"
          />
        </div>

        {dishes && (
          <div className="flex flex-wrap gap-4">
            {dishes.map((dish, index) => {
              console.log(dish);
              if (index > 0) {
                console.log(dish?.card?.card?.restaurant);
                return (
                  <div className="p-5 bg-gray-300">
                    <div
                      onClick={() =>
                        navigate(
                          `/restaurant/${dish?.card?.card?.restaurant?.info?.id}`
                        )
                      }
                    >
                      <p className="font-bold">
                        By {dish?.card?.card?.restaurant?.info?.name}
                      </p>
                      <p className="font-bold">
                        {dish?.card?.card?.restaurant?.info?.avgRating} (
                        {dish?.card?.card?.restaurant?.info?.totalRatingsString}{" "}
                        ratings)
                      </p>
                    </div>
                    <div>
                      <p>{dish?.card?.card?.info?.name}</p>
                      <img
                        className="rounded-lg w-20"
                        src={claudinaryImgCDN + dish?.card?.card?.info?.imageId}
                      />
                      <FoodBtn
                        item={dish?.card}
                        price={dish?.card?.card?.info?.price / 100}
                        deliveryFee={0}
                      />
                      <p>Rs. {dish?.card?.card?.info?.price / 100}</p>
                    </div>
                  </div>
                );
              }
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
              // console.log(suggestion?.metadata);
              console.log(suggestion?.metadata?.split(";")[4]?.split(",")[0]);
              return (
                <div
                  onClick={() => {
                    console.log(suggestion?.type);

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

                    setSugg(null);
                  }}
                  key={index}
                  className="w-[80%] flex gap-4 p-2  hover:bg-slate-200 rounded-md"
                >
                  <img
                    src={claudinaryImgCDN + suggestion.cloudinaryId}
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
              console.log(searchCuisine.entityId);
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
                  className="w-24"
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
  }
};

export default Search;
