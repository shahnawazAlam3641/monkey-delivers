import React, {useState, useEffect} from 'react'
import { PRE_SEARCH_API } from '../constants'

const Search = () => {

    const [searchText, setSearchText] = useState("")

    const [preSearchCuisines, setPreSearchCuisines] = useState(null)

    const handleSearch = (e)=>{
        setSearchText(e.target.value)
    }

useEffect(()=>{
    getCuisines()
},[])

async function getCuisines(){
  console.log('https://corsproxy.org/?' + encodeURIComponent(PRE_SEARCH_API))
  const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(PRE_SEARCH_API))
  // const response = await fetch(DEV_API)
  const json = await response.json()
  console.log(json)
  setPreSearchCuisines(json)
}

if(preSearchCuisines){

    const {header:{title}, gridElements:{infoWithStyle:{info}}} = preSearchCuisines?.data?.cards[1]?.card?.card


  return (
    <div className='max-[80%] w-[950px] mx-auto flex flex-col gap-8'>
        <form className='mx-auto mt-8 w-[100%] flex justify-center gap-2'>
        <input type='text' value={searchText} onChange={handleSearch} className="rounded-l-full w-[80%] border-2 p-3 " placeholder='Search for Restaurants and Food'/>
        <button className='border-2 p-2 rounded-r-full' formAction='submit'><svg
  xmlns="http://www.w3.org/2000/svg"
  enableBackground="new 0 0 24 24"
  height={24}
  viewBox="0 0 24 24"
  width={24}
  focusable="false"
  style={{
    pointerEvents: "none",
    display: "block",
    width: "100%",
    height: "100%"
  }}
>
  <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
</svg>
</button>
        </form>
        <h2 className='text-[#171a29] text-3xl font-bold'>{title}</h2>

        <div className='flex  overflow-scroll overflow-y-hidden'>
            {info.map((searchCuisine)=>{
                return <img className='w-24' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + searchCuisine.imageId}/>
            })}
        </div>
    </div>
  )
}
}

export default Search