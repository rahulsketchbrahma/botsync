import React from "react";
import "./aboutUs.scss";
import About from "./sections/about";
import Banner from "./sections/banner";
import OurValues from "./sections/ourValues";
import OurAdvisors from "./sections/ourAdvisors";
import JoinTeam from "./sections/joinTeam";
import Partners from "./sections/partners";
import Footer from "../../compenents/footer";


const AboutUs = () => {
  return (
    <>
      <Banner />
      <About />
      <OurValues />
      <OurAdvisors />
      <JoinTeam />
      <Partners />
      <Footer/>
    </>
  );
};
export default AboutUs;
