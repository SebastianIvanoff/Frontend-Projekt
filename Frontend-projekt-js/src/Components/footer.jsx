import React from "react";
import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BiCar } from "react-icons/bi";
import { LuParkingSquare } from "react-icons/lu";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

const Footer = () => {
  const { updateToken, token } = useContext(AuthContext);

  return (
    <div className="footer">
      <div>
        <NavLink to={"/"} className="Footer-link">
          <LuParkingSquare size={20} />
          Parkering
        </NavLink>
      </div>

      <NavLink to={"#"} className="Footer-link">
        <LuParkingSquare size={20} />
        Mina Parkeringar
      </NavLink>
      {token ? (
        <NavLink to={"/login"} className="Footer-link" onClick={handleLogout}>
          <AiOutlineUser size={20} />
          Logga ut
        </NavLink>
      ) : (
        <NavLink to={"/login"} className="Footer-link">
          <AiOutlineUser size={20} />
          Logga in
        </NavLink>
      )}
    </div>
  );
};

export default Footer;
