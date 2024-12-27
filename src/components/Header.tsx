import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLocation } from "../utils/locationSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <div className="flex justify-between items-center py-3 px-10 bg-[#171a29] ">
      <div className="flex gap-5 items-center">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="w-16 rounded-full cursor-pointer"
        />

        <p
          onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords;
              console.log(latitude, longitude);

              dispatch(setLocation({ lat: latitude, long: longitude }));
            });
          }}
          className="text-white"
        >
          Location
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
