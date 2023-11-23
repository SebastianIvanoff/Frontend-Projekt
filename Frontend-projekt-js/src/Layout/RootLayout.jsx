import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer";
import MobileNav from "../Components/mobileNav";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  console.log("Search term:", searchTerm); 

  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} />
      <MobileNav />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
