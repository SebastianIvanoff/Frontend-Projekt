import { BiCar } from "react-icons/bi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LuParkingSquare } from "react-icons/lu";
import { RiDivideLine, RiMotorbikeLine } from "react-icons/ri";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-top">
        <div className="mobile-navtitle">
          <BiCar size={20} />
          GarageBNB
        </div>
        <div className="mobile-nav-search">
          <AiOutlineSearch size={20} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="mobile-navlinks">
        <NavLink to="/" className="mobile-nav-car">
          <BiCar classname="mobile-pic-car" size={28} />
          <span>Bil</span>
        </NavLink>
        <NavLink to="/" className="mobile-nav-mc">
          <span>MC</span>
          <RiMotorbikeLine classname="mobile-pic-mc" size={28} />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
