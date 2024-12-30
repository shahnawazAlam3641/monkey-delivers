import React from "react";

const RestaurantMenuHeader = ({ menu }) => {
  const {
    id,
    name,
    locality,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla: { slaString, lastMileTravelString },
    feeDetails: { totalFee },
  } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <>
      <div className="w-[850px] max-w-[90%] mx-auto my-6 border bg-slate-50 border-slate-100  rounded-2xl shadow-lg">
        <div className="flex justify-between items-center  p-5">
          <div>
            <p className="text-3xl font-semibold">{name}</p>
            <p className="text-slate-600">{cuisines.join(", ")}</p>
            <p className="text-slate-600">{locality}</p>
            <p className="flex gap-1 items-center text-slate-600">
              <img
                className="w-[18] h-[18]"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
              />
              {lastMileTravelString}{" "}
              {totalFee ? `| ₹${totalFee / 100} Delivery fee will apply` : ""}
            </p>
          </div>
          <div className="flex flex-col items-center border border-slate-300 rounded-md p-2 gap-2">
            <p className="flex items-center gap-1 text-[#15883F] font-semibold">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                role="img"
                aria-hidden="true"
                strokecolor="rgba(2, 6, 12, 0.92)"
                fillcolor="rgba(2, 6, 12, 0.92)"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                />
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B" />
                    <stop offset="1" stopColor="#128540" />
                  </linearGradient>
                </defs>
              </svg>

              {avgRating}
            </p>

            <p className="h-[1px] w-full bg-slate-400 "></p>

            <p className="text-slate-500 font-semibold text-center leading-4">
              {totalRatingsString}
            </p>
          </div>
        </div>

        <p className="h-[1px] w-[95%] mx-auto bg-slate-200 "></p>

        <div className="flex gap-5 p-5">
          <p className="flex items-center gap-2 font-semibold">
            <svg
              className="RestaurantTimeCost_icon__8UdT4"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              />
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              />
            </svg>

            {slaString}
          </p>

          <p className="flex place-items-center gap-2 font-semibold">
            <svg
              className="RestaurantTimeCost_icon__8UdT4"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx={9}
                cy={9}
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              />
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              />
            </svg>

            {costForTwoMessage}
          </p>
        </div>
      </div>

      <div className="flex gap-4 m-16 items-center justify-center w-[850px] max-w-[90%] mx-auto ">
        <svg
          aria-hidden="true"
          height="24"
          width="24"
          className="sc-iGgWBj kDDZoM"
        >
          <g opacity=".8" fill="[#3D4045]" stroke="[#3D4045]" strokeWidth=".2">
            <path d="M10.558 4c-.073 0-.119.002-.13.003-1.821 0-3.33.92-4.788 1.811-1.456.889-2.961 1.808-4.796 1.808a.252.252 0 0 0-.251.252c0 .14.112.253.251.253h6.29a.252.252 0 0 0 .25-.253.252.252 0 0 0-.25-.252H3.33c.91-.363 1.747-.874 2.57-1.376 1.464-.894 2.847-1.738 4.541-1.738.03-.002 1.683-.074 2.742.937.598.571.902 1.389.902 2.43.002.033.097 1.753-.882 2.8-.508.544-1.226.82-2.134.82-.021 0-1.156.034-1.864-.655-.388-.377-.583-.912-.58-1.59 0-.012 0-.753.554-1.31.432-.435 1.088-.655 1.95-.655h.052a.252.252 0 0 0 .002-.505c-1.03-.01-1.827.262-2.366.809a2.492 2.492 0 0 0-.694 1.665c-.004.816.243 1.475.736 1.952.865.839 2.167.795 2.22.793h.002c1.043 0 1.884-.33 2.49-.98 1.129-1.21 1.02-3.082 1.016-3.161 0-1.17-.357-2.112-1.061-2.783C12.48 4.08 11.004 4 10.558 4ZM23.163 7.748h-7.327a.248.248 0 0 0-.243.252c0 .14.109.252.243.252h7.328A.248.248 0 0 0 23.407 8a.248.248 0 0 0-.244-.252Z"></path>
          </g>
        </svg>

        <p className="font-semibold text-[#8D8F91]">MENU</p>
        <svg
          aria-hidden="true"
          height="24"
          width="24"
          className="sc-iGgWBj kDDZoM"
        >
          <g opacity=".8" fill="[#3D4045]" stroke="[#3D4045]" strokeWidth=".2">
            <path
              transform="scale(-1, 1) translate(-24, 0)"
              d="M10.558 4c-.073 0-.119.002-.13.003-1.821 0-3.33.92-4.788 1.811-1.456.889-2.961 1.808-4.796 1.808a.252.252 0 0 0-.251.252c0 .14.112.253.251.253h6.29a.252.252 0 0 0 .25-.253.252.252 0 0 0-.25-.252H3.33c.91-.363 1.747-.874 2.57-1.376 1.464-.894 2.847-1.738 4.541-1.738.03-.002 1.683-.074 2.742.937.598.571.902 1.389.902 2.43.002.033.097 1.753-.882 2.8-.508.544-1.226.82-2.134.82-.021 0-1.156.034-1.864-.655-.388-.377-.583-.912-.58-1.59 0-.012 0-.753.554-1.31.432-.435 1.088-.655 1.95-.655h.052a.252.252 0 0 0 .002-.505c-1.03-.01-1.827.262-2.366.809a2.492 2.492 0 0 0-.694 1.665c-.004.816.243 1.475.736 1.952.865.839 2.167.795 2.22.793h.002c1.043 0 1.884-.33 2.49-.98 1.129-1.21 1.02-3.082 1.016-3.161 0-1.17-.357-2.112-1.061-2.783C12.48 4.08 11.004 4 10.558 4ZM23.163 7.748h-7.327a.248.248 0 0 0-.243.252c0 .14.109.252.243.252h7.328A.248.248 0 0 0 23.407 8a.248.248 0 0 0-.244-.252Z"
            ></path>
          </g>
        </svg>
      </div>
    </>
  );
};

export default RestaurantMenuHeader;
