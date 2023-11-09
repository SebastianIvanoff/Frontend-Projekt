import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const BackButton = () => {
  return (
    <>
      <Link to={"/"} className="backButton">
        <MdKeyboardArrowLeft size={50} />
        <p className="backlink">Tillbaka</p>
      </Link>
    </>
  );
};

export default BackButton;
