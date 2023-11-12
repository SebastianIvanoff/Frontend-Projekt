import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListingDetails = () => {
  const { id } = useParams();
  const [bookableDetails, setBookableDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/bookable/${id}`);
        const data = res.data;
        setBookableDetails(data);
        console.log(data);
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

  return (
    <div className='bookables-details-wrapper'>
      <h2>{Name}</h2>
      <p>Address: {Address}</p>
      <p>Description: {Description}</p>
      <p>Price: {Price}</p>
      <p>Category: {Category}</p>
      <img src={bookableDetails.Img} alt={bookableDetails.Name} style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default ListingDetails;
