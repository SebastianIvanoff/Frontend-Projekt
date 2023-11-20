import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import BackButton from "../Components/BackButton";

const ListingDetails = () => {
  const { id } = useParams();
  const [bookableDetails, setBookableDetails] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { token, userId } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(""); // Initialize with an empty string
  const [endDate, setEndDate] = useState(""); // Initialize with an empty string

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/bookable/${id}`);
        const data = res.data;
        setBookableDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  // Render null if bookableDetails is still null
  if (!bookableDetails) {
    return null;
  }

  const { Name, Address, Description, Price, Category } = bookableDetails;
  
  const handleAddtoCart = () => {
    if (!token) {
      navigate("/login");
    } else {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const numberOfDays = Math.floor((end - start) / (24 * 60 * 60 * 1000)) + 1;
      const pricePerDay = bookableDetails.Price * numberOfDays;
      const totalPrice = pricePerDay;
      const reservationDetails = {
        startDate,
        endDate,
        bookableId: id,
        bookableDetails,
        totalPrice,
      };

      
      navigate("/checkout", { state: { reservationDetails } });
    }
  };
  

  return (
    <>
    <BackButton />
    <div className="bookables-details-wrapper">
    <div className="image-container">
    <img
      src={bookableDetails.Img}
      alt={bookableDetails.Name}
      style={{ maxWidth: "100%" }}
      className="listing-img"
    />
    <div className="image-text">
      <p>{Price}/ dygn</p>
    </div>
  </div>
  <div className="listing-info">
        <div className="listing-dates">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
        </div>
      <div className="listing-user">
           <h2>{Name}</h2>
      </div>
   
      
      <div className="listing-general-info">
      <p>Address: </p>
      <p className="listing-specific-info">{Address}</p>
      <p>Description: </p>
      <p className="listing-specific-info">{Description}</p>
      <p>Price: </p>
      <p className="listing-specific-info">{Price} / dygn</p>
     
      <button onClick={handleAddtoCart} className="listing-btn">Reservera</button>
      </div>
      </div>
    </div>
    </>
  );
};

export default ListingDetails;
