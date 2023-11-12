// Filter.js
import { BiCar } from "react-icons/bi";
import { RiMotorbikeLine } from "react-icons/ri";

const Filter = ({ filterByCategory, bilClassName, mcClassName }) => {
  return (
    <div className="filter-btn">
      <button className={`filter-car ${bilClassName}`} onClick={() => filterByCategory("Bil")}>
        <BiCar className="filter-pic-car" size={28} />
        <span>Bil</span>
      </button>
      <button className={`filter-mc ${mcClassName}`} onClick={() => filterByCategory("MC")}>
        <RiMotorbikeLine className="filter-pic-mc" size={28} />
        <span>MC</span>
      </button>
    </div>
  );
};

export default Filter;
