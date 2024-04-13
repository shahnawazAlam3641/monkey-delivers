import React, { useState, useEffect } from "react";
import { GROCERY_HOME_API, claudinaryImgCDN } from "../utils/constants";
import GroceryNav from "./GroceryNav";
import { claudinaryImgCDN } from "../utils/constants";
import GroceryCategoryCard from "./GroceryCategoryCard";
import { Link } from "react-router-dom";

const Grocery = () => {
  const [groceryHome, setGroceryHome] = useState(null);

  useEffect(() => {
    getGroceryHome();
  }, []);

  const getGroceryHome = async () => {
    // const response = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/" + GROCERY_HOME_API
    // );

    const response = await fetch(GROCERY_HOME_API);

    const data = await response.json();
    setGroceryHome(data);
    console.log(data);
  };

  if (!groceryHome) return <h1> Loading............</h1>;

  const {
    widgetInfo: { title },
    data,
  } = groceryHome?.data?.widgets[1];

  console.log(groceryHome?.data?.widgets[2]?.data);

  return (
    <div>
      <GroceryNav />

      <div className="w-[900px] max-w-[90%] mx-auto p-2 ">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex flex-wrap gap-4 ">
          {data.map((card) => {
            return (
              <Link to={"/grocery/category/" + card?.displayName}>
                <GroceryCategoryCard card={card} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grocery;
