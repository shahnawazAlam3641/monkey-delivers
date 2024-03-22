import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_MENU_API } from '../constants'

const RestaurantMenu = () => {

  const [menu, setMenu] = useState(null)

  const {resId} = useParams()
  console.log(resId)

  useEffect(()=>{

    getMenu()

  },[])

  const getMenu = async ()=>{
    const response = await fetch('https://thingproxy.freeboard.io/fetch/' + RESTAURANT_MENU_API + resId)
    const menu = await response.json()
    setMenu(menu)
    console.log(menu)
  }

  if(!menu) return <h1>Loading MEnu</h1>

  const {id,name, locality, costForTwoMessage,cuisines,avgRating,totalRatingsString, sla:{slaString,lastMileTravelString}} = menu?.data?.cards[0]?.card?.card?.info

  // const {title, itemCards} = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  return (
    menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((menuType, index)=>{
      return index>0 ? (

        <div>
        <h1 className='bg-blue-300'>{menuType?.card?.card?.title}</h1>
        
        {menuType?.card?.card?.itemCards ?  menuType?.card?.card?.itemCards.map((item)=>{

          
return (
<div>
  <div>
  <p>{item?.card?.info?.name}</p>
  <p>₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p>
  <p>{item?.card?.info?.description}</p>
</div>
<div>
  <img/>
  <button>add</button>
  <div>
    <button>-</button>
    <p>0</p>
    <button>+</button>
  </div>
</div>
</div>
)

} ) 
: menuType?.card?.card?.carousel ? <h1 className='bg-red-500'>carousel</h1> 
: menuType?.card?.card?.categories ? menuType?.card?.card?.categories.map((categoryItem)=>{
    return <h1 className='bg-yellow-300'>{categoryItem?.title}</h1>
    

})
: null}
        </div>

      ) : null
    })
  )
}

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


export default RestaurantMenu