import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";
import { useApiUrls } from "./useApiUrls";
const BYPASS_CORS = import.meta.env.VITE_BYPASS_CORS_URL;

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  const urls = useApiUrls();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    // console.log('menu effect called')
    // const response = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/" + RESTAURANT_MENU_API + resId
    // );
    const response = await fetch(BYPASS_CORS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
      body: JSON.stringify({ url: urls?.RESTAURANT_MENU_API(resId) }),
    });

    const data = await response.json();
    setMenu(data);
  };

  return menu;
};

export default useRestaurantMenu;
