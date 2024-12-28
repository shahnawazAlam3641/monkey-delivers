import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useApiUrls } from "../utils/useApiUrls";
// import { CUISINE_CATEGORY_API } from "../utils/constants";

const CuisineCollection = () => {
  const [cuisineCollection, setCuisineCollection] = useState([]);
  const CUISINE_CATEGORY_API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5399241&lng=88.3874402&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null&collection=`;
  const [collectionInfo, setCollectionInfo] = useState(null);

  const { collectionId } = useParams();

  const urls = useApiUrls();
  //   console.log(params);

  const fetchCollectionRestaurants = async () => {
    const response = await fetch(urls?.CUISINE_CATEGORY_API(collectionId));
    const data = await response.json();

    const filteredRest = data?.data?.cards.filter((cardData) => {
      if (cardData?.card?.card?.info) {
        return cardData;
      }
    });

    console.log(filteredRest);

    setCollectionInfo(data?.data?.cards[0]?.card?.card);
    setCuisineCollection(filteredRest);
  };

  useEffect(() => {
    try {
      fetchCollectionRestaurants();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="max-w-[85%] mx-auto p-5">
        <p className="text-5xl font-bold">{collectionInfo?.title}</p>
        <p className="font-medium">{collectionInfo?.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4 max-w-[85%] mx-auto">
        {cuisineCollection.map((cardData) => {
          // console.log(cardData?.card);
          return (
            <Link
              to={"/restaurant/" + cardData?.card?.card?.info?.id}
              key={cardData?.card?.card?.info?.id}
            >
              <RestaurantCard restaurant={cardData?.card?.card} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CuisineCollection;
