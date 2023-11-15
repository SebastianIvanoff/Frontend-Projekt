import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const navigate = useNavigate()
  const { token } = useContext(AuthContext)

  useEffect(() => {
    if (token == null) {
      navigate("/login");
    }
  });

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    try{
      const res = await axios.get('http://localhost:8080/api/Reservation/')
      const data = res.data 
      setBookings(data)
     // console.log(data)
    }
    catch(error) {
      console.log(error)
    }
  }
  fetchData()
  }, [])
  

  return (
    <div>Bookings</div>
  )
}

export default Bookings