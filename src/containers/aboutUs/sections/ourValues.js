import React from "react";
import icon from "../../../assets/images/aboutUs/ourValues/iconCopy.png";
import customerCentric from "../../../assets/images/aboutUs/ourValues/customerCentric.png";
import safety from "../../../assets/images/aboutUs/ourValues/safety.png";
import last from "../../../assets/images/aboutUs/ourValues/last.png";

const OurValues = () => {
  return (
    <section className="ourValues">
      <div className="container">
        <div className="ourValuesContainer">
          <div className="commonHeading">
            <h1>Our Values</h1>
            <p>
              While we enjoy the process of building robots, we also make sure
              that they are in line with our company values
            </p>
          </div>
          <div className="group">
            <div className="content">
              <div className="imageWrapper">
                <img src={icon} alt="" />
              </div>
              <div className="frame">
                <h1>simplicity</h1>
                <p>
                  Automation should no longer be seen as desktop from the
                  1980’s. We are here to build the smartphone equivalent of
                  autonomous mobile robots that are extremely simple to use.
                </p>
              </div>
            </div>
            <div className="content">
              <div className="imageWrapper">
                <img src={customerCentric} alt="" />
              </div>
              <div className="frame">
                <h1>Customer Centric</h1>
                <p>
                  Building a product is easy, but building a product that our
                  customers can’t live without is what we need to do. Listen
                  intently, iterate quickly and always aim to provide top
                  quality service.
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="content">
              <div className="imageWrapper">
                <img src={safety} alt="" />
              </div>
              <div className="frame">
                <h1>Safety & Reliability</h1>
                <p>
                  Safety is at the core of everything we build. Obsess over
                  safety and reliability to provide users a trustworthy product.
                </p>
              </div>
            </div>
            <div className="content">
              <div className="imageWrapper">
                <img src={last} alt="" />
              </div>
              <div className="frame">
                <h1>Collaboration</h1>
                <p>
                  We can’t build and provide everything our customers need.
                  Where we can’t, we work with partners, and so should our
                  systems. This applies not just externally, but also internally
                  among ourselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurValues;
