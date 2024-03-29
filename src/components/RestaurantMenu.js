import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RESTAURANT_MENU_API, claudinaryImgCDN } from "../utils/constants";
import RestaurantMenuHeader from "./RestaurantMenuHeader";
import RestaurantMenuItemCards from "./RestaurantMenuItemCards";
import RestaurantMenuCarousel from "./RestaurantMenuCarousel";
import RestaurantMenuCategories from "./RestaurantMenuCategories";

const RestaurantMenu = () => {
  const [accordianOpen, setAccordionOpen] = useState(false);

  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  // const [menu, setMenu] = useState(null)

  // useEffect(()=>{

  //   getMenu()

  // },[])

  // const getMenu = async ()=>{
  //   const response = await fetch('https://thingproxy.freeboard.io/fetch/' + RESTAURANT_MENU_API + resId)
  //   const menu = await response.json()
  //   setMenu(menu)
  //   // console.log(menu)
  // }

  // console.log(menu)

  if (!menu) return <h1>Loading MEnu</h1>;

  // const {
  //   id,
  //   name,
  //   locality,
  //   costForTwoMessage,
  //   cuisines,
  //   avgRating,
  //   totalRatingsString,
  //   sla: { slaString, lastMileTravelString },
  //   feeDetails: { totalFee },
  // } = menu?.data?.cards[0]?.card?.card?.info;

  // const {title, itemCards} = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  // console.log(menu?.data?.cards[0]?.card?.card?.info)

  return (
    <>
      <RestaurantMenuHeader menu={menu} />

      {menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (menuType, index) => {
          return index > 0 ? (
            <>
              {console.log(menuType)}
              <div>
                {menuType?.card?.card?.itemCards ? (
                  <RestaurantMenuItemCards
                    key={menuType?.card?.card?.title + index}
                    menuType={menuType}
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

// const RestaurantMenu = () => {
//   const [menu, setMenu] = useState(null);
//   const { resId } = useParams();

//   useEffect(() => {
//     getMenu();
//   }, []);

//   const getMenu = async () => {
//     const response = await fetch('https://thingproxy.freeboard.io/fetch/' + RESTAURANT_MENU_API + resId);
//     const menuData = await response.json();
//     setMenu(menuData);
//     console.log(menuData);
//   };

//   if (!menu) return <h1>Loading Menu</h1>;

//   return (
//     <div>
//       {menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((menuType, index) => {
//         return index > 0 ? (
//           <div key={index}>
//             <h1>{menuType?.card?.card?.title}</h1>
//             {menuType?.card?.card?.itemCards ? (
//               menuType?.card?.card?.itemCards.map((item, itemIndex) => (
//                 <div key={itemIndex}>
//                   <div>
//                     <p>name</p>
//                     <p>price</p>
//                     <p>desc</p>
//                   </div>
//                   <div>
//                     <img  />
//                     <button>Add</button>
//                     <div>
//                       <button>-</button>
//                       <p>0</p>
//                       <button>+</button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : null}
//           </div>
//         ) : null;
//       })}
//     </div>
//   );
// };

export default RestaurantMenu;
