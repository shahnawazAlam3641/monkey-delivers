import React, {useState, useEffect} from 'react'
import { PRE_SEARCH_API } from '../constants'
import { claudinaryImgCDN } from '../constants'
// import { SEARCH_SUGG_API } from '../constants'

const Search = () => {

    const [searchText, setSearchText] = useState("")
    const [preSearchCuisines, setPreSearchCuisines] = useState(null)
    const [sugg, setSugg] = useState(null)



    const handleSearch = (e)=>{
        setSearchText(e.target.value)
    }

useEffect(()=>{
    getCuisines()
},[])

async function getCuisines(){
  // console.log('https://corsproxy.org/?' + encodeURIComponent(PRE_SEARCH_API))
  // const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(PRE_SEARCH_API))
  // const response = await fetch(DEV_API)

  const response = await fetch('https://thingproxy.freeboard.io/fetch/' + PRE_SEARCH_API)

  const json = await response.json()
  console.log(json)
  setPreSearchCuisines(json)
}

useEffect(()=>{

  console.log(searchText.length > 1)

  if(searchText.length > 1){

    console.log("if else called")
    const searchTimeOut = setTimeout(() => {
      getSearchSugg()
    }, 250);
    
    return ()=> clearInterval(searchTimeOut);
  }
  
},[searchText])

async function getSearchSugg(){
  const response = await fetch('https://thingproxy.freeboard.io/fetch/' + `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.7040592&lng=77.10249019999999&str=${searchText}&trackingId=undefined`)

  const json = await response.json()
  console.log(json)
  setSugg(json)

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

       

        {sugg && (
      <div className='flex flex-col gap-4 items-center'>
        {sugg.data.suggestions.map((suggestion) => (
          <div key={suggestion.cloudinaryId} className='w-[80%] flex gap-4 p-2  hover:bg-slate-200'>
            <img src={claudinaryImgCDN + suggestion.cloudinaryId} alt="Suggestion" className='w-20 h-20 object-cover rounded-lg'/>
            <div className='flex flex-col justify-center'>
              <p>{suggestion.text}</p>
              <p className='text-gray-500 text-[0.8rem]'>{suggestion.type}</p>
            </div>
          </div>
        ))}
      </div>
    )}


        <div className={`flex flex-col gap-6 ${searchText ? 'hidden' : 'flex'}`} >
        <h2 className='text-[#171a29] text-3xl font-bold'>{title}</h2>

        <div className='flex  overflow-scroll overflow-y-hidden'>
            {info.map((searchCuisine)=>{
                return <img className='w-24' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + searchCuisine.imageId}/>
            })}
        </div>
        </div>
    </div>
  )
}
}

export default Search