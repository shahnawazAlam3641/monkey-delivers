export const createApiUrls = (lat, long) => {
  const urlObj = {
    LOCATION_INFO_API: `https://www.swiggy.com/dapi/misc/address-recommend?latlng=${lat}%2C${long}`,

    MAIN_API: `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,

    RESTAURANT_MENU_API: (restaurantId) =>
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${restaurantId}`,

    CUISINE_CATEGORY_API: (collectioId) =>
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null&collection=${collectioId}`,

    SEARCH_SUGG_API: (searchText) =>
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${long}&trackingId=undefined&str=${searchText}`,

    SEARCH_DISH_API: (dish) =>
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${long}&submitAction=SUGGESTION&str=${dish}`,

    SEARCH_CUISINE_API: (cuisine) =>
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${long}&submitAction=SUGGESTION&str=${cuisine}`,

    PRE_SEARCH_API: `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${lat}&lng=${long}`,
  };

  return urlObj;
};

export const LOCATION_API =
  "https://www.swiggy.com/dapi/misc/place-autocomplete?input=";

export const SWIGGY_COORDS_API =
  "https://www.swiggy.com/dapi/misc/address-recommend?place_id=";

export const MAIN_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5399241&lng=88.3874402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RESTAURANT_MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=";

export const CUISINE_CATEGORY_API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5399241&lng=88.3874402&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null&collection=`;

export const SEARCH_DISH_API =
  "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&submitAction=SUGGESTION&str=";

export const SEARCH_CUISINE_API =
  "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&submitAction=SUGGESTION&str=";

export const CUISINE_IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const claudinaryImgCDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const PRE_SEARCH_API =
  "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.7040592&lng=77.10249019999999";

//  export const SEARCH_SUGG_API = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.7040592&lng=77.10249019999999&str=${searchText}&trackingId=undefined`

export const GROCERY_HOME_API =
  "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP";

export const GROCERY_CATEGORY_ITEM_API =
  "https://www.swiggy.com/api/instamart/category-listing?custom_back=true&taxonomyType=All+Listing&categoryName=";
// "https://www.swiggy.com/api/instamart/category-listing?custom_back=true&taxonomyType=All+Listing&categoryName=Fresh%20Fruits";
// "https://www.swiggy.com/api/instamart/category-listing/filter?filterId=64a69b7cc6c4c700011466ee&storeId=1386096&type=All%20Listing";
//data.widgets[1].data
