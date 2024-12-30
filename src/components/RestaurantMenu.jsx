import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RESTAURANT_MENU_API, claudinaryImgCDN } from "../utils/constants";
import RestaurantMenuHeader from "./RestaurantMenuHeader";
import RestaurantMenuItemCards from "./RestaurantMenuItemCards";
import RestaurantMenuCarousel from "./RestaurantMenuCarousel";
import RestaurantMenuCategories from "./RestaurantMenuCategories";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const [accordianOpen, setAccordionOpen] = useState(1);

  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (!menu) return <RestaurantMenuShimmer />;

  return (
    <>
      <RestaurantMenuHeader menu={menu} />

      {menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (menuType, index) => {
          return index > 0 ? (
            <>
              <div>
                {menuType?.card?.card?.itemCards ? (
                  <RestaurantMenuItemCards
                    key={menuType?.card?.card?.title + index}
                    menuType={menuType}
                    showFoodItem={index === accordianOpen ? true : false}
                    accordianOpen={() => setAccordionOpen(index)}
                  />
                ) : menuType?.card?.card?.carousel ? (
                  <RestaurantMenuCarousel
                    key={menuType?.card?.card?.title + index}
                    menuType={menuType}
                  />
                ) : menuType?.card?.card?.categories ? (
                  <RestaurantMenuCategories
                    key={menuType?.card?.card?.title + index}
                    menuType={menuType}
                  />
                ) : null}
              </div>
            </>
          ) : null;
        }
      )}
    </>
  );
};

export default RestaurantMenu;
