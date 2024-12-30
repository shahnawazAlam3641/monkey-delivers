import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";
import EmptyCart from "../common/EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();

  const [itemTotal, setItemTotal] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);

  const [itemCounts, setItemCounts] = useState({});

  const deliveryFee = 75;
  const platformFee = 10;

  const GST = (itemTotal * 18) / 100;

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, cartFood) => sum + cartFood.itemPrice,
      0
    );
    setItemTotal(total);

    const counts = cartItems.reduce((acc, item) => {
      const key = item?.title || item?.card?.info?.name;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    setItemCounts(counts);
  }, [cartItems]);

  if (cartItems.length == 0) {
    return <EmptyCart />;
  }

  return (
    <div className=" p-4 h-full flex justify-center items-center">
      <div className="bg-white w-[350px] p-4 rounded-sm flex flex-col gap-4 shadow-xl max-w-[85%]">
        {/* Cart Header */}
        <div className="flex">
          <p className="border-b-2 font-bold">Your Cart</p>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-2">
          {Object.entries(itemCounts).map(([key, count]) => {
            const cartFood = cartItems.find(
              (item) => item?.title === key || item?.card?.info?.name === key
            );

            return (
              <div
                key={key}
                className="flex justify-between items-center w-full gap-4"
              >
                <p className="w-[55%] text-nowrap truncate hover:text-wrap">
                  {cartFood?.card?.info?.name || cartFood?.title}
                </p>

                <div className="w-[25%] flex gap-2 justify-center items-center border-[1px] border-solid border-slate-200 p-1">
                  <button
                    className="border-r-[1px] border-slate-200 px-1 font-semibold text-gray-400"
                    onClick={() => dispatch(removeItem(cartFood))}
                  >
                    -
                  </button>
                  <p className="text-green-400">{count}</p>
                  <button
                    className="border-l-[1px] border-slate-200 px-1 font-semibold text-green-400"
                    onClick={() => dispatch(addItem(cartFood))}
                  >
                    +
                  </button>
                </div>

                <p className="w-[20%] text-end">
                  ₹{Math.round(cartFood?.itemPrice)}
                </p>
              </div>
            );
          })}
        </div>

        <input
          className="w-full bg-slate-100 p-2 rounded-sm"
          type="text"
          placeholder="Any suggestions? We will pass it on..."
        />

        <div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Opt in for No-contact Delivery</label>
          </div>
          <p className="text-gray-400 text-xs">
            Unwell, or avoiding contact? Please select no-contact delivery.
            Partner will safely place the order outside your door (not for COD).
          </p>
        </div>

        <div className="flex flex-col">
          <p>Bill Details</p>

          <div className="flex justify-between">
            <p className="text-gray-400 text-base">Item Total</p>
            <p className="text-gray-400 text-base">₹{Math.round(itemTotal)}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-400 text-base">Delivery Fee</p>
            <p className="text-gray-400 text-base">₹{deliveryFee}</p>
          </div>

          <div className="w-full h-[1px] bg-slate-200 my-1"></div>

          <div className="flex justify-between">
            <p className="text-gray-400 text-base">Platform Fee</p>
            <p className="text-gray-400 text-base">₹{platformFee}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-400 text-base">GST</p>
            <p className="text-gray-400 text-base">₹{Math.round(GST)}</p>
          </div>

          <div className="w-full h-[1px] bg-black my-1"></div>

          <div className="flex justify-between">
            <p>To Pay</p>
            <p>₹{Math.round(itemTotal + deliveryFee + platformFee + GST)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
