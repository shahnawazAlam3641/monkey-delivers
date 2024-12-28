import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLocation } from "../utils/locationSlice";
import { useState } from "react";
import LocationSidebar from "./LocationSidebar";
import { useApiUrls } from "../utils/useApiUrls";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const currentLocation = useSelector((store) => store?.location?.address);

  console.log(currentLocation);

  const [locationSideBar, setLocationSideBar] = useState(false);

  return (
    <div className="relative flex justify-between items-center py-3 px-10 bg-[#171a29] ">
      <LocationSidebar
        setLocationSideBar={setLocationSideBar}
        locationSideBar={locationSideBar}
      />
      <div className="flex gap-5 items-center">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="w-16 rounded-full cursor-pointer"
        />

        <p
          className="text-white cursor-pointer flex gap-3 *:justify-center items-center group"
          onClick={() => setLocationSideBar(true)}
        >
          <span className="group-hover:underline  py-1 font-medium">
            {currentLocation.main_text}
          </span>{" "}
          <span className="text-gray-400 text-sm">
            {currentLocation.secondary_text}
          </span>
        </p>
      </div>

      <div className="flex items-center ">
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
              <span className="absolute text-[10px] font-bold ">
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
