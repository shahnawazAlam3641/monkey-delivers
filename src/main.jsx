import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CuisineCollection from "./components/pages/CuisineCollection.jsx";
import RestaurantMenu from "./components/pages/RestaurantMenu.jsx";
import Login from "./components/pages/Login.jsx";
import Cart from "./components/pages/Cart.jsx";
import Help from "./components/pages/Help.jsx";
import Search from "./components/pages/Search.jsx";
import Body from "./components/pages/Body.jsx";
import Error from "./components/pages/Error.jsx";

const Grocery = lazy(() => import("./components/grocery/Grocery"));
const GroceryCategoryItems = lazy(() =>
  import("./components/grocery/GroceryCategoryItems")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "*",
        element: <Error />,
      },
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

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
