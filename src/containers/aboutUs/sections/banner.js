import React from "react";
import Navbar from "../../../compenents/navbar/index"

const Banner = () => {
  return (
    <section className="banner">
      <div className="bannerContainer">
      <Navbar/>
        <div className="bannerContent">
          
          <h1>
            About <span>Botsync</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
