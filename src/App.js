import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Search from "./components/Search";
// import Grocery from './components/Grocery';
import Help from "./components/Help";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const GroceryCategoryItems = lazy(() =>
  import("./components/GroceryCategoryItems")
);

import RestaurantMenu from "./components/RestaurantMenu";
import CuisineCollection from "./components/CuisineCollection";
// import GroceryCategoryItems from "./components/GroceryCategoryItems";
const App = () => {
  return (
    <Provider store={appStore}>
      <div className=" overflow-x-hidden overflow-y-auto ">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/about",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/collection/:collectionId",
        element: <CuisineCollection />,
      },
    ],
  },
  {
    path: "/grocery",
    element: (
      <Suspense>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "category",
        element: <Grocery />,
      },
      {
        path: "category/:categoryName",
        element: <GroceryCategoryItems />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
