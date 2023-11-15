import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Register from "./Pages/Register";
import ListingDetails from "./Pages/ListingDetails";
import Bookings from "./Pages/Bookings";
import { CartProvider } from "./context/CartContext";
import Checkout from "./Pages/Checkout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "Bookable/:id",
          element: <ListingDetails />,
        },
        {
          path: "bookings",
          element: <Bookings />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <CartProvider>
          {React.createElement(RouterProvider, { router })}
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;
