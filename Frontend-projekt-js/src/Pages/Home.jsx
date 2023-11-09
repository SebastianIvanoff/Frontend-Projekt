import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [bookables, setBookables] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/bookable/')
        const data = res.data;
        setBookables(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
   
  }, []); 
  

  return (
    <div>Home</div>
  )
}

export default Home