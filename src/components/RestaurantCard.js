import React from 'react'
import { claudinaryImgCDN } from '../constants'

const RestaurantCard = ({restaurant}) => {

    const {id, name, cloudinaryImageId, locality,avgRating, cuisines, sla:{slaString}} = restaurant?.info

    // console.log(restaurant?.info?.cloudinaryImageId)
  return (


    
    <div >
        <img className='w-56 h-36 object-cover' src={claudinaryImgCDN+cloudinaryImageId}/>
        <p className='font-semibold'>{name} khale</p>
        <p>{avgRating} and {slaString}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
    </div>
    
  )
}

export default RestaurantCard