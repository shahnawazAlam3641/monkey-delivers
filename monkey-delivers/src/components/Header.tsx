import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <div className="flex justify-between p-3 bg-[#171a29] ">
      <img src={logo} className="w-16 rounded-full" />

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
