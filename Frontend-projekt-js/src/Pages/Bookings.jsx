import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";

const Bookings = () => {
  const navigate = useNavigate();
  const { token, userId } = useContext(AuthContext);

  useEffect(() => {
    if (token == null) {
      navigate("/login");
    }
  }, [token, navigate]);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/reservation/${userId}`
        );
        const data = res.data;
        setBookings(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <>
      <BackButton />
      <div className="bookings-wrapper">
        <h2>Mina Bokningar</h2>
        <div className="past-bookings">
          {bookings.length === 0 ? (
            <p>Ingen bokning (0)</p>
          ) : (
            bookings.map((booking) => (
              <div key={booking._id} className="booking-item">
                <div className="booking-img-container">
                  <img
                    src={booking.bookableDetails.Img}
                    alt={booking.bookableDetails.Name}
                    className="booking-img"
                  />
                  <p className="price-tag">
                    {booking.bookableDetails.Price}/dygn
                  </p>
                </div>
                <div className="booking-dates">
                  <p>
                    Datum{" "}
                    {new Date(booking.startDate).toLocaleDateString()}{" "}
                    {new Date(booking.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Bookings;
