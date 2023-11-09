import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


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
        <div className="navtitle">GarageBNB</div>
        <div>
          <NavLink to={"/"} className="NavLink">
            Parkering
          </NavLink>
        </div>
      </div>

      <div className="nav-search">
        <input type="text" />
        <button>Search</button>
      </div>

      <div className="nav-part-two">
        <NavLink to={"#"} className="NavLink">
          Mina Parkeringar
        </NavLink>
        <NavLink to={"/login"} className="NavLink">
          Logga in
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
