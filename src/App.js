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

const Grocery = lazy(() => import("./components/Grocery"));
const GroceryCategoryItems = lazy(() =>
  import("./components/GroceryCategoryItems")
);

import RestaurantMenu from "./components/RestaurantMenu";
// import GroceryCategoryItems from "./components/GroceryCategoryItems";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
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
