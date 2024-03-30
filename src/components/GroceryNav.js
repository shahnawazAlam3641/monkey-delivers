import React from "react";

const GroceryNav = () => {
  return (
    <div className=" bg-gradient-to-r from-fuchsia-300 to-pink-300">
      <div className="w-[900px] max-w-[90%] mx-auto p-4 flex flex-col gap-2 bg-gradient-to-r from-fuchsia-300 to-pink-300">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="bg-orange-600 rounded-md px-2 text-center text-white">
              <p className="text-xl font-bold">16</p>
              <p className="text-xs -mt-1 font-semibold">MINS</p>
            </div>
            <div>
              <p className="text-base font-bold">Delivery to Other</p>
              <p className="text-[#675D66 ] text-sm">Address</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={36}
            viewBox="0 0 32 32"
            fill="#fff"
            aria-hidden="true"
          >
            <circle cx={16} cy={16} r={16} fill="url(#a)" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.502 13.32c2.083 0 3.771-1.643 3.771-3.67s-1.688-3.67-3.771-3.67c-2.082 0-3.771 1.643-3.771 3.67s1.688 3.67 3.77 3.67zm-7.845 7.022c1.403-2.84 4.388-4.803 7.843-4.803 3.457 0 6.441 1.962 7.843 4.803.615 1.247.923 1.87.367 2.764-.556.894-1.472.894-3.303.894h-9.814c-1.831 0-2.747 0-3.302-.894-.556-.895-.249-1.518.366-2.764z"
            />
            <defs>
              <linearGradient
                id="a"
                x1={16}
                y1={0}
                x2={16}
                y2={32}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#36393E" stopOpacity=".8" />
                <stop offset={1} stopColor="#36393E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <input
          type="text"
          value={""}
          className="rounded-lg w-full border-2 p-3 border-none mx-auto "
          placeholder="Search your Need"
        />
      </div>
    </div>
  );
};

export default GroceryNav;
