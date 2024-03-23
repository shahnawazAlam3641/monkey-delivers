import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_MENU_API, claudinaryImgCDN } from '../constants'

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
    // console.log(menu)
  }

  if(!menu) return <h1>Loading MEnu</h1>

  const {id,name, locality, costForTwoMessage,cuisines,avgRating,totalRatingsString, sla:{slaString,lastMileTravelString}, feeDetails:{totalFee}} = menu?.data?.cards[0]?.card?.card?.info

  // const {title, itemCards} = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

console.log(menu?.data?.cards[0]?.card?.card?.info)

  return (

    menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((menuType, index)=>{
      return index>0 ? (

        <div>

          <div>
            <div>
              <p>{name}</p>
              <p>{cuisines}</p>
              <p>{locality}</p>
              <p>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu'/>
                {lastMileTravelString} | ₹{totalFee / 100} Delivery fee will apply
              </p>
            </div>
            <div>
              <p><svg
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
                        </svg>{avgRating}</p>
              <p>{totalRatingsString}</p>
            </div>
          </div>

          <div>
            <p>
            <svg class="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>
            {slaString}
            </p>

            <p>
            <svg class="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
            {costForTwoMessage}
            </p>
          </div>



        <h1 className='bg-blue-300'>{menuType?.card?.card?.title}</h1>
        
        {menuType?.card?.card?.itemCards ?  menuType?.card?.card?.itemCards.map((item)=>{

          
return (
<div className='bg-green-500'>
  <div>
  <p>{item?.card?.info?.name}</p>
  <p>₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p>
  <p>{item?.card?.info?.description}</p>
</div>
<div>
  <img className='w-16' src={claudinaryImgCDN+item?.card?.info?.imageId}/>
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
: menuType?.card?.card?.carousel ? menuType?.card?.card?.carousel.map((item)=>{
    return (
      <div className='bg-red-500'>
        <img className='w-16' src={claudinaryImgCDN+item?.dish?.info?.imageId} />
        <div>
          <p>{item?.dish?.info?.name}</p>
          <p>{item?.dish?.info?.description}</p>
        </div>
        <div>
          <p>₹{item?.dish?.info?.defaultPrice / 100 || item?.dish?.info?.price / 100}</p>
          <button>add</button>
          <div>
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>
      </div>
    )
})
: menuType?.card?.card?.categories ? menuType?.card?.card?.categories.map((categoryItem)=>{
    return (
    
    <div className='bg-yellow-300'>
    <h1 >{categoryItem?.title}</h1>
      <div>
        {categoryItem?.itemCards.map((item)=>{
          return (
            <div>
  <div>
  <p>{item?.card?.info?.name}</p>
  <p>₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p>
  <p>{item?.card?.info?.description}</p>
</div>
<div>
  <img className='w-16' src={ claudinaryImgCDN+item?.card?.info?.imageId}/>
  <button>add</button>
  <div>
    <button>-</button>
    <p>0</p>
    <button>+</button>
  </div>
</div>
</div>
          )
        })}
      </div>
    </div>)
    

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