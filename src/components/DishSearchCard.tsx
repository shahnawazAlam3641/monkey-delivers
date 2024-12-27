import { useNavigate } from "react-router-dom";
import { claudinaryImgCDN } from "../utils/constants";
import FoodBtn from "./FoodBtn";

const DishSearchCard = ({ dish }) => {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-white shadow-lg w-[350px] mx-auto  flex flex-col gap-4 rounded-md">
      <div
        onClick={() =>
          navigate(`/restaurant/${dish?.card?.card?.restaurant?.info?.id}`)
        }
        className="group cursor-pointer"
      >
        <p className="font-bold text-gray-500 group-hover:underline">
          By {dish?.card?.card?.restaurant?.info?.name}
        </p>
        <p className="text-gray-500">
          {dish?.card?.card?.restaurant?.info?.avgRating} (
          {dish?.card?.card?.restaurant?.info?.totalRatingsString} ratings)
        </p>
      </div>

      <div className="w-full h-[1px] bg-slate-400"> </div>

      <div className="flex justify-between items-center gap-5 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-gray-600 font-bold ">
            {dish?.card?.card?.info?.name}
          </p>
          <p className="text-gray-600 font-bold">
            Rs. {dish?.card?.card?.info?.price / 100}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 min-w-[40%]">
          <img
            className="rounded-lg w-32 aspect-square object-cover"
            src={claudinaryImgCDN + dish?.card?.card?.info?.imageId}
          />
          <FoodBtn
            item={dish?.card}
            price={dish?.card?.card?.info?.price / 100}
            deliveryFee={0}
          />
        </div>
      </div>
    </div>
  );
};

export default DishSearchCard;
