// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import { useCart } from "../context/CartContext";
// import { AuthContext } from "../context/AuthContext";

// const Checkout = () => {
//   const { cart, removeFromCart } = useCart();
//   const { token, userId } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { startDate, endDate, bookableId } = location.state || {};
//   const [bookableDetails, setBookableDetails] = useState(null);

//   useEffect(() => {
//     const fetchBookableDetails = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/api/bookable/${Id}`);
//         const data = res.data;
//         setBookableDetails(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (bookableId) {
//       fetchBookableDetails();
//     }
//   }, [bookableId]);

//   // Initialize reservationDetails state
//   const [reservationDetails, setReservationDetails] = useState({
//     bookableId: "",
//     user: userId,
//     startDate,
//     endDate,
//     totalPrice: 0,
//   });

//   useEffect(() => {
//     if (bookableDetails) {
//       setReservationDetails({
//         ...reservationDetails,
//         bookableId: bookableDetails._id || "",
//         totalPrice: bookableDetails.Price || 0,
//       });
//     }
//   }, [bookableDetails, reservationDetails]);

//   const handleCheckout = async () => {
//     try {
//       // Make a POST request to create a reservation using the state
//       await axios.post(
//         "http://localhost:8080/api/reservation/",
//         reservationDetails,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Iterate through each item in the cart and remove it
//       for (const item of cart) {
//         removeFromCart(item.id);
//       }

//       // Navigate to a success page or display a success message
//       navigate("#");
//     } catch (error) {
//       console.error("Error creating reservation:", error);
//       // Handle errors, display an error message, or navigate to an error page
//     }
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cart.map((item) => (
//         <div key={item.id}>
//           <p> {item.bookableId}</p>
//           <p> {item.userId}</p>
//           <div>
//             <span>Start Date: {new Date(startDate).toLocaleDateString()}</span>
//             <span>End Date: {new Date(endDate).toLocaleDateString()}</span>
//             <span>Total Price: {item.totalPrice}</span>
//           </div>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}
//       <button onClick={handleCheckout}>Checkout</button>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reservationDetails = location.state?.reservationDetails;
  const { token, userId } = useContext(AuthContext);

  if (!reservationDetails) {
    navigate("/error");
    return null;
  }

  const { startDate, endDate, bookableId, bookableDetails, totalPrice } =
    reservationDetails;

  const [reservationData, setReservationData] = useState({
    bookable: bookableId,
    startDate,
    endDate,
    totalPrice,
    user: userId,
  });

  useEffect(() => {}, [startDate, endDate, bookableId]);

  console.log(reservationData);
  const handleReservation = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/reservation/",
        reservationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming the reservation is successfully created, you can redirect the user
      // or perform other actions as needed.
      console.log("Reservation created:", response.data);
      navigate("/bookings"); // Redirect to a success page or another route
    } catch (error) {
      console.error("Error creating reservation:", error);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <div className="checkout-wrapper">
      {/* Display reservation details or form fields as needed */}
      <h2>Checkout</h2>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      {/* Add more details or form fields as needed */}
      <button onClick={handleReservation}>Complete Reservation</button>
    </div>
  );
};

export default Checkout;
