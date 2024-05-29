import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-slate-100 p-4 h-full flex justify-center items-center">
      <div className="bg-white w-[350px] p-4 justify-center  rounded-sm flex flex-col gap-4">
        <div className="flex">
          <p className="border-b-2 font-bold">Your Cart</p>
        </div>
        <div>cart items</div>
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
            Partner will safely place the order outside your door (not for COD)
          </p>
        </div>
        <div className="flex flex-col">
          <p>Bill Details</p>
          <div className="flex justify-between">
            <p className="text-gray-400 text-base">item Total</p>
            <p className="text-gray-400 text-base">rs.</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400 text-base">delivery fee</p>
            <p className="text-gray-400 text-base">rs.</p>
          </div>
          <div>line</div>
          <div className="flex justify-between">
            <p className="text-gray-400 text-base">Platform Fee</p>
            <p className="text-gray-400 text-base">rs.</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400 text-base">GST</p>
            <p className="text-gray-400 text-base">rs.</p>
          </div>
          <div>mota line</div>
          <div className="flex justify-between">
            <p>To Pay</p>
            <p>rs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
