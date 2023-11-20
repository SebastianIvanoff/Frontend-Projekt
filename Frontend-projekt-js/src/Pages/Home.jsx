import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Filter from '../Components/Filter';

const Home = ({ setSearchTerm }) => {
  const [bookables, setBookables] = useState([]);
  const [filteredBookables, setFilteredBookables] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/bookable/');
      const data = res.data;
      setBookables(data);
      setFilteredBookables(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByCategory = (category) => {
    const filtered = bookables.filter((bookable) => bookable.Category === category);
    setFilteredBookables(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);

    const filteredByName = bookables.filter((bookable) =>
      bookable.Name.toLowerCase().includes(term.toLowerCase())
    );

    const filteredByCategory = filteredBookables.filter(
      (bookable) => bookable.Category.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredBookables([...filteredByName, ...filteredByCategory]);
  };

  return (
    <>
      <Filter filterByCategory={filterByCategory} />
      <div className="bookables-container">
        {filteredBookables.map((bookable) => (
          <div className="bookables" key={bookable._id}>
            <img className="bookable-img" src={bookable.Img} alt={bookable.Name} />
            <div className="price-overlay">
              <p>{bookable.Price}/dygn</p>
            </div>

            <div className="bookable-info">
              <p className='link-info'>Kategori: {bookable.Category}</p>
              <p className='link-info'>{bookable.Description}</p>
              <Link to={`/bookable/${bookable._id}`} className="link-details">
                <span>Reservera</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
