import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CuisineCollection from "./components/CuisineCollection.tsx";
import RestaurantMenu from "./components/RestaurantMenu.tsx";
import Login from "./components/Login.tsx";
import Cart from "./components/Cart.tsx";
import Help from "./components/Help.tsx";
import Search from "./components/Search.tsx";
import Body from "./components/Body.tsx";

const Grocery = lazy(() => import("./components/Grocery"));
const GroceryCategoryItems = lazy(
  () => import("./components/GroceryCategoryItems")
);

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

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={appRouter} />
);
