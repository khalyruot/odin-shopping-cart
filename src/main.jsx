import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Aboutpage from "./Aboutpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {path: "shoppingcart", element:<ShoppingCart />},
      {path: "about", element:<Aboutpage />},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
