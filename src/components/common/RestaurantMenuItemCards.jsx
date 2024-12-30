import { useState } from "react";
import { useSelector } from "react-redux";
import RestaurantDish from "./RestaurantDish";
import DropdownArrow from "../svg/DropdownArrow";

const RestaurantMenuItemCards = ({
  menuType,
  accordianOpen,
  showFoodItem,
  // deliveryFee,
}) => {
  const [showItems, setShowItems] = useState(showFoodItem);

  const handleAccordian = () => {
    setShowItems(!showItems);
    accordianOpen();
  };

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

        <DropdownArrow isOpen={showItems} />
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
