import { useNavigate } from "react-router-dom";
import { claudinaryImgCDN } from "../../utils/constants";
import RatingStar from "../svg/RatingStar";

const CuisineRestSearchCard = ({ cuisineRest }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/restaurant/${cuisineRest?.card?.card?.info?.id}`)
      }
      className="flex hover:scale-95 transition-all duration-200 w-full shadow-lg gap-4 p-2 items-center cursor-pointer"
    >
      <img
        className="w-24 aspect-square object-cover rounded-md"
        src={
          !cuisineRest?.card?.card?.info?.cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Icons-Autosuggest/AS_Cuisine_3x"
            : claudinaryImgCDN +
              cuisineRest?.card?.card?.info?.cloudinaryImageId
        }
      />
      <div className="flex flex-col ">
        <p className="text-gray-600 font-semibold text-lg">
          {cuisineRest?.card?.card?.info?.name}
        </p>
        <div className="flex ">
          <p className="text-gray-500 font-semibold text-sm flex gap-1 items-center">
            <RatingStar />
            {cuisineRest?.card?.card?.info?.avgRating ||
              cuisineRest?.card?.card?.info?.avgRatingString}{" "}
            ({cuisineRest?.card?.card?.info?.totalRatingsString} ratings){" "}
          </p>
        </div>
        <p className="text-gray-400 font-semibold text-sm">
          {cuisineRest?.card?.card?.info?.cuisines.map((cuisine) => {
            return <span> {cuisine},</span>;
          })}
        </p>
      </div>
    </div>
  );
};

export default CuisineRestSearchCard;
