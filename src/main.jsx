import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Aboutpage from "./Aboutpage";
import Image from "./Image";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "shoppingcart",
    element: <ShoppingCart />,
  },

  {
    path: "home",
    element: <Home />,
    children: [
      {path: "cart", element: <Cart />},
      {path: "aboutpage", element:<Aboutpage />},
      {path: "image", element:<Image />},
    ],
  },
 
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
