import { BiCar } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { RiMotorbikeLine } from "react-icons/ri";

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
     
    </div>
  );
};

export default MobileNav;
