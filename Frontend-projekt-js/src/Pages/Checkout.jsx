import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BackButton from "../Components/BackButton";

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
    bookableDetails,
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

      
      console.log("Reservation created:", response.data);
      navigate("/pay");
    } catch (error) {
      console.error("Error creating reservation:", error);
      
    }
  };

  return (
<>
  <BackButton />

  <div className="checkout-wrapper">
    <h2>Checkout</h2>

<div className="checkout-status">
    <span class="dot-blue"></span>
    <hr />
  <span class="dot-blue"></span>
  <hr />
  <span class="dot"></span>
</div>
  

    <div className="checkout-info">
      <div className="img-container">
        <img
          src={bookableDetails.Img}
          alt={bookableDetails.Name}
          className="checkout-img"
        />
        <div className="img-text"><p>
          {bookableDetails.Price}/dygn
          </p></div>
      </div>
        <div className="checkout-info">
          <div className="checkout-dates">
            <p>
              Datum: {startDate} {endDate}
            </p>
          </div>
          <p>{bookableDetails.Price} / dygn</p>
        </div>
      
    </div>
        <button onClick={handleReservation} className="checkout-btn">
          Betala Nu (Totalt: {totalPrice}kr)
        </button>
  </div>
</>

  );
};

export default Checkout;
