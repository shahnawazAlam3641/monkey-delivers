import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GROCERY_CATEGORY_ITEM_API,
  claudinaryImgCDN,
} from "../utils/constants";

const GroceryCategoryItems = () => {
  const [categoryItem, setCategoryItem] = useState();
  const { categoryName } = useParams();
  // const [imageId, setImageId] = useState("");
  const [categoryInfo, setCategoryInfo] = useState({});

  useEffect(() => {
    getCategoryitems();
  }, []);

  const getCategoryitems = async () => {
    console.log(
      "https://thingproxy.freeboard.io/fetch/" +
        GROCERY_CATEGORY_ITEM_API +
        categoryName.replace(" ", "%20")
    );
    const response = await fetch(
      GROCERY_CATEGORY_ITEM_API + categoryName.replace(" ", "%20")
    );
    const data = await response.json();
    console.log(data);
    setCategoryItem(data);
  };

  useEffect(() => {
    if (categoryItem) {
      categoryItem?.data?.categories.map((item) => {
        if (item?.displayName === categoryName) {
          console.log(item?.displayName, categoryName);
          setCategoryInfo((prevState) => {
            newState = { ...prevState };
            newState.displayName = item.displayName;
            newState.imageId = item.imageId;
            return newState;
          });
        }
      });
    }
  }, [categoryItem]);

  if (!categoryItem) return <h1>Loading..............</h1>;

  return (
    <div className="w-[900px] max-w-[90%] mx-auto bg-red-600">
      <div className="flex items-center gap-5">
        <svg
          className="w-5 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img
              className="w-14"
              src={claudinaryImgCDN + categoryInfo?.imageId}
            />
            <p>{categoryInfo?.displayName}</p>
          </div>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GroceryCategoryItems;
