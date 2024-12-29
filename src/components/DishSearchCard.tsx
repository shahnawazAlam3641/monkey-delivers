import { useNavigate } from "react-router-dom";
import { claudinaryImgCDN } from "../utils/constants";
import FoodBtn from "./FoodBtn";

const DishSearchCard = ({ dish }) => {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-white shadow-lg w-[350px] mx-auto  flex flex-col gap-4 rounded-md max-w-[95%]">
      <div
        onClick={() =>
          navigate(`/restaurant/${dish?.card?.card?.restaurant?.info?.id}`)
        }
        className="group cursor-pointer"
      >
        <p className="font-bold text-gray-500 group-hover:underline">
          By {dish?.card?.card?.restaurant?.info?.name}
        </p>
        <p className="text-gray-500 flex items-center gap-1">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx={10}
              cy={10}
              r={9}
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            />
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1={10}
                y1={1}
                x2={10}
                y2={19}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B" />
                <stop offset={1} stopColor="#128540" />
              </linearGradient>
            </defs>
          </svg>
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
            // src={claudinaryImgCDN + dish?.card?.card?.info?.imageId}

            src={
              !dish?.card?.card?.info?.imageId
                ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Icons-Autosuggest/AS_Cuisine_3x"
                : claudinaryImgCDN + dish?.card?.card?.info?.imageId
            }
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
