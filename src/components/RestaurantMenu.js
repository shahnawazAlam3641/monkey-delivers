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
        <h1>{menuType?.card?.card?.title}</h1>
      ) : null
    })
  )
}

export default RestaurantMenu