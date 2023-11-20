import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BiCar } from "react-icons/bi";
import { LuParkingSquare } from "react-icons/lu";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

const Navbar = ({ setSearchTerm }) => {
  const { logout, token } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  const handleClick = (e, to) => {
    if (location.pathname === to) {
      e.preventDefault();
      window.location.reload();
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm((prevSearchTerm) => prevSearchTerm); // Using the previous value of searchTerm
    console.log("Search term before update:", searchTerm);
  };

  return (
    <div className="navbar">
      <div className="nav-part-one">
        <div className="navtitle">
          <BiCar size={20} />
          GarageBNB
        </div>
        <div>
          <NavLink
            to={"/"}
            className="navLink"
            onClick={(e) => handleClick(e, "/")}
          >
            <LuParkingSquare size={20} />
            Parkering
          </NavLink>
        </div>
      </div>

      <form className="nav-search" onSubmit={handleSearchSubmit}>
        <AiOutlineSearch size={20} />
        <input type="text" placeholder="Sök..." onChange={handleSearch} />
      </form>

      <div className="nav-part-two">
        <NavLink to={"/bookings"} className="navLink">
          <LuParkingSquare size={20} />
          Mina Parkeringar
        </NavLink>
        {token ? (
          <NavLink to={"/login"} className="navLink" onClick={handleLogout}>
            <AiOutlineUser size={20} />
            Logga ut
          </NavLink>
        ) : (
          <NavLink to={"/login"} className="navLink">
            <AiOutlineUser size={20} />
            Logga in
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
