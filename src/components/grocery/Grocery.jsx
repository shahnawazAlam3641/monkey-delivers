import { useState, useEffect } from "react";
import { GROCERY_HOME_API } from "../../utils/constants";
import GroceryNav from "./GroceryNav";
import GroceryCategoryCard from "./GroceryCategoryCard";
import { Link } from "react-router-dom";
import { useApiUrls } from "../../utils/useApiUrls";

const Grocery = () => {
  const [groceryHome, setGroceryHome] = useState(null);

  const urls = useApiUrls();

  useEffect(() => {
    getGroceryHome();
  }, []);

  const getGroceryHome = async () => {
    const response = await fetch(GROCERY_HOME_API);

    const data = await response.json();
    setGroceryHome(data);
  };

  if (!groceryHome) return <h1> Loading............</h1>;

  const {
    widgetInfo: { title },
    data,
  } = groceryHome?.data?.widgets[1];

  return (
    <div>
      <GroceryNav />

      <div className="w-[900px] max-w-[90%] mx-auto p-2 ">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex flex-wrap gap-4 ">
          {data.map((card, index) => {
            return (
              <Link key={index} to={"/grocery/category/" + card?.displayName}>
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
