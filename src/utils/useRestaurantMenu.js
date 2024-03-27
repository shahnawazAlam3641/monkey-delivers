import React from "react";
import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    // console.log('menu effect called')
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/" + RESTAURANT_MENU_API + resId
    );

    const data = await response.json();
    setMenu(data);
  };

  return menu;
};

export default useRestaurantMenu;
