import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BiCar } from "react-icons/bi";
import { LuParkingSquare } from "react-icons/lu";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const { updateToken, token } = useContext(AuthContext);

  const location = useLocation();

  const handleLogout = () => {
    updateToken(null);
  };

  console.log(token);

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="navbar">
      <div className="nav-part-one">
        <div className="navtitle">
          <BiCar  size={20}/>
          GarageBNB
        </div>
        <div>
          <NavLink to={"/"} className="navLink">
            <LuParkingSquare  size={20}/>
            Parkering
          </NavLink>
        </div>
      </div>

      <div className="nav-search">
        <AiOutlineSearch  size={20}/>
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-part-two">
        <NavLink to={"#"} className="navLink">
          <LuParkingSquare  size={20}/>
          Mina Parkeringar
        </NavLink>
        {token ? (
          <NavLink to={"/login"} className="navLink" onClick={handleLogout}>
            <AiOutlineUser  size={20}/>
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
