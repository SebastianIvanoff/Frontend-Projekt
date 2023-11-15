import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const { token, userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { startDate, endDate } = location.state || {};

  const handleCheckout = async () => {
    try {
      // Iterate through each item in the cart and create a reservation
      for (const item of cart) {
        const reservationDetails = {
          bookable: item.bookableId,
          user: userId,
          startDate,
          endDate,
          totalPrice: item.totalPrice,
        };

        // Make a POST request to create a reservation
        console.log(reservationDetails)
        await axios.post(
          "http://localhost:8080/api/reservation/",
          reservationDetails,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
          );
        // Remove the item from the cart after creating the reservation
        removeFromCart(item.id);
      }

      // Navigate to a success page or display a success message
      navigate("#");
    } catch (error) {
      console.error("Error creating reservation:", error);
      // Handle errors, display an error message, or navigate to an error page
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.bookableDetails?.Name}</p>
          <div>
            <span>Start Date: {new Date(startDate).toLocaleDateString()}</span>
            <span>End Date: {new Date(endDate).toLocaleDateString()}</span>
            <span>Total Price: {item.totalPrice}</span>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
