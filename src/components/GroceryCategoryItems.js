import React from "react";
import { useParams } from "react-router-dom";

const GroceryCategoryItems = () => {
  const { categoryName } = useParams();

  return <div>{categoryName}</div>;
};

export default GroceryCategoryItems;
