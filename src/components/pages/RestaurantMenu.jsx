import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantMenuHeader from "../common/RestaurantMenuHeader";
import RestaurantMenuItemCards from "../common/RestaurantMenuItemCards";
import RestaurantMenuCarousel from "../common/RestaurantMenuCarousel";
import RestaurantMenuCategories from "../common/RestaurantMenuCategories";
import RestaurantMenuShimmer from "../shimmer/RestaurantMenuShimmer";

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
            <div key={index}>
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
          ) : null;
        }
      )}
    </>
  );
};

export default RestaurantMenu;
