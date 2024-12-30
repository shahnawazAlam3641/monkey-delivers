import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import LocationSidebar from "../common/LocationSidebar";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const currentLocation = useSelector((store) => store?.location?.address);

  const [locationSideBar, setLocationSideBar] = useState(false);

  return (
    <div className="relative flex justify-between items-center py-3 px-10 bg-[#171a29] ">
      <LocationSidebar
        setLocationSideBar={setLocationSideBar}
        locationSideBar={locationSideBar}
      />
      <div className="flex gap-5 items-center ">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="w-16 rounded-full cursor-pointer"
        />

        <p
          className="text-white cursor-pointer flex  flex-wrap  items-center group"
          onClick={() => setLocationSideBar(true)}
        >
          <span className="group-hover:underline text-xs  mr-2 font-medium">
            {currentLocation.main_text}
          </span>{" "}
          <span className="text-gray-400 text-xs">
            {currentLocation.secondary_text}
          </span>
        </p>
      </div>

      <div className="flex cursor-pointer items-center justify-center gap-2 md:hidden p-2 group">
        <svg
          className="w-10 "
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm6.24 15a7.99 7.99 0 01-12.48 0 7.99 7.99 0 0112.48 0zM10 10a3 3 0 100-6 3 3 0 000 6z"
            fill="#5C5F62"
          />
        </svg>
        <svg
          className="self-baseline w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="#717171"
        >
          {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
        </svg>

        <div className=" absolute top-[75%] rounded-sm  right-8 hidden group-hover:block transition-all duration-200 bg-white shadow-lg z-10">
          <ul className="flex flex-col ">
            <li className="m-1 text-center cursor-pointer bg-white py-1 px-2 hover:bg-slate-300">
              <Link to="/">Home</Link>
            </li>
            <li className="m-1 text-center cursor-pointer bg-white py-1 px-2 hover:bg-slate-300">
              <Link to="/search">Search</Link>
            </li>
            {/* <li className="m-3 cursor-pointer">
            <Link to="/grocery/category">Grocery</Link>
          </li> */}
            {/* <li className="m-3 cursor-pointer">
            <Link to="/help">Help</Link>
          </li> */}
            <li className="m-1 text-center cursor-pointer bg-white py-1 px-2 hover:bg-slate-300">
              <Link to="/cart">
                Cart{" "}
                <span className="absolute text-[10px] font-light bg-green-600 px-1 rounded-full text-white">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            <li
              onClick={() => setLocationSideBar(true)}
              className="m-1 text-center cursor-pointer bg-white py-1 px-2 hover:bg-slate-300"
            >
              Location
            </li>
          </ul>
        </div>
      </div>

      <div className=" items-center hidden md:flex">
        <ul className="flex items-center text-white">
          <li className="m-3 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="m-3 cursor-pointer">
            <Link to="/search">Search</Link>
          </li>
          {/* <li className="m-3 cursor-pointer">
            <Link to="/grocery/category">Grocery</Link>
          </li> */}
          {/* <li className="m-3 cursor-pointer">
            <Link to="/help">Help</Link>
          </li> */}
          <li className="m-3 cursor-pointer">
            <Link to="/cart">
              Cart{" "}
              <span className="absolute text-[10px] font-light bg-green-600 px-1 rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>

        {/* <button className="bg-yellow-400 p-2 rounded-md m-3 text-[#171a29]">
          Login
        </button> */}
      </div>
    </div>
  );
};

export default Header;
