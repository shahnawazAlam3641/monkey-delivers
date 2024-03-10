import React from 'react'
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className='flex justify-between p-3 bg-[#171a29]'>
      <img src = {logo}  className='w-16 rounded-full'/>

      <div className='flex items-center '>
        <ul className='flex items-center text-white'>
          <li className='m-3'>Home</li>
          <li className='m-3'>Search</li>
          <li className='m-3'>Grocery</li>
          <li className='m-3'>About Us</li>
          <li className='m-3'>Cart</li>
        </ul>

        <button className='bg-yellow-400 p-2 rounded-md m-3 text-[#171a29]'>Login</button>
      </div>
    </div>
  )
}

export default Header