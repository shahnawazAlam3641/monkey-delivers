import React from 'react'
import RestaurantCard from './restaurantCard'
import { claudinaryImgCDN } from '../constants'


const RestaurantChains = ({cuisine}) => {

  const {restaurants} = cuisine?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
console.log(cuisine?.data?.cards[2]?.card?.card?.title)

  return (
  
  <div className='flex flex-col '>
    <div className='max-w-[85%] mx-auto my-10 text-[#171a29] font-bold text-3xl'>{cuisine?.data?.cards[2]?.card?.card?.title}</div>
    <div className='mx-auto flex gap-3'>
      <button className='border rounded-full shadow-sm p-2'>Ratings 4.0+</button>
      <button className='border rounded-full shadow-sm p-2'>Fast Delivery</button>
      
    </div>
    <div className='flex max-w-[80%] mx-auto  gap-[3.8rem] flex-wrap mt-10 t'>
       
    
          {restaurants.map((restaurant)=>{

           {/* return <RestaurantCard restaurant={restaurant}/> */}
            

           return <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant}/>
          })

    } 
    
</div>
</div>
    
  )
}

export default RestaurantChains