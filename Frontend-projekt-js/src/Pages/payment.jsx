import React from "react";
import BackButton from "../Components/BackButton";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="payment-container">
      <BackButton />
      <div className="payment-info">
           <p>Betalning sker....</p>
      <p>Vänligen vänta</p>
      <Link to={"/bookings"} className="payment-link">Gå vidare (mina parkeringar)</Link>
      </div>
   
    </div>
  );
};

export default Payment;
