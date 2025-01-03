import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantCard from "../common/RestaurantCard";
import { useApiUrls } from "../../utils/useApiUrls";
import ShimmerCard from "../shimmer/ShimmerCard";

const BYPASS_CORS = import.meta.env.VITE_BYPASS_CORS_URL;

const CuisineCollection = () => {
  const [cuisineCollection, setCuisineCollection] = useState([]);
  const [collectionInfo, setCollectionInfo] = useState(null);

  const { collectionId } = useParams();

  const urls = useApiUrls();

  const fetchCollectionRestaurants = async () => {
    const response = await fetch(BYPASS_CORS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: urls?.CUISINE_CATEGORY_API(collectionId) }),
    });
    const data = await response.json();

    const filteredRest = data?.data?.cards.filter((cardData) => {
      if (cardData?.card?.card?.info) {
        return cardData;
      }
    });

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

  if (cuisineCollection.length == 0) {
    return (
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto">
        {Array.from(Array(12)).map((n, index) => {
          return <ShimmerCard key={index} />;
        })}{" "}
      </div>
    );
  }

  return (
    <div className="max-w-[85%] w-[70%] mx-auto">
      <div className=" mx-auto p-5">
        <p className="text-5xl text-[#171A29] font-bold">
          {collectionInfo?.title}
        </p>
        <p className="font-medium text-[#171A29]">
          {collectionInfo?.description}
        </p>
      </div>
      <div className="grid grid-cols-1  gap-3 py-5 md:grid-cols-2 lg:grid-cols-3   mx-auto">
        {cuisineCollection.map((cardData) => {
          return (
            <Link
              to={"/restaurant/" + cardData?.card?.card?.info?.id}
              key={cardData?.card?.card?.info?.id}
              className="mx-auto"
            >
              <RestaurantCard restaurant={cardData?.card?.card} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CuisineCollection;
