import { useState } from "react";
import { claudinaryImgCDN } from "../utils/constants";

import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import RestaurantDish from "./RestaurantDish";

const RestaurantMenuItemCards = ({
  menuType,
  accordianOpen,
  showFoodItem,
  deliveryFee,
}) => {
  const [showItems, setShowItems] = useState(showFoodItem);

  const handleAccordian = () => {
    setShowItems(!showItems);
    accordianOpen();
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-[850px] max-w-[90vw] mx-auto my-6  ">
      <div className="w-full bg-slate-200 h-3 mb-3"></div>
      <div
        className="flex justify-between items-center p-2  "
        onClick={handleAccordian}
      >
        <p className="font-bold text-lg">
          {menuType?.card?.card?.title} (
          {menuType?.card?.card?.itemCards.length})
        </p>

        <svg
          className={`${showItems ? "rotate-180" : "rotate-0"} `}
          aria-hidden="true"
          height="16"
          width="16"
        >
          <g opacity=".8" fill="[#3D4045]" stroke="[#3D4045]" strokeWidth=".2">
            <path
              d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402.46 0 .789-.223.992-.402a5.43 5.43 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106Z"
              fill="var(--fill-color)"
              fillOpacity=".92"
            />
          </g>
        </svg>
      </div>

      {menuType?.card?.card?.itemCards.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="shadow-md rounded-lg">
            <RestaurantDish showItems={showItems} item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItemCards;
