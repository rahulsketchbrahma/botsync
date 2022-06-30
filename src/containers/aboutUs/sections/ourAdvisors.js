import React from "react";
import customer from "../../../assets/images/aboutUs/ourAdvisors/unnamed.png";
import customers from "../../../assets/images/aboutUs/ourAdvisors/customer.png";
import customerTwo from "../../../assets/images/aboutUs/ourAdvisors/customerTwo.png";
import customerThree from "../../../assets/images/aboutUs/ourAdvisors/customerThree.png";
import person from "../../../assets/images/aboutUs/ourAdvisors/person.png";

import indeedLogo from "../../../assets/images/aboutUs/ourAdvisors/vector.png";
const OurAdvisors = () => {
  return (
    <section className="ourAdvisors">
      <div className="container">
        <div className="ourAdvisorsContainer">
          <div className="commonHeading">
            <h1>Our Advisors</h1>
            <p>
              Key individuals who guide us through our technical development and
              business strategies.
            </p>
          </div>
          <div className="group">
            <div className="customerContainer">
              <div className="customerImage">
                <img src={customer} />
              </div>
              <div className="cutomerName">
                <h1>ROGER CROOK</h1>
                <img src={indeedLogo} />
              </div>
              <div className="description">
                <p>
                  Roger has an extensive leadership and business of managing
                  complex, multi-cultural, global network businesses throughout
                  the world. His last key roles for DHL Express included Head of
                  Global Sales, CEO Americas and CEO Asia, Global CEO for DHL
                  Forwarding & Freight.
                </p>
              </div>
            </div>
            <div className="customerContainer">
              <div className="customerImage">
                <img src={customers} />
              </div>
              <div className="cutomerName">
                <h1>WOLFGANG LEHMACHER</h1>
                <img src={indeedLogo} />
              </div>
              <div className="description">
                <p>
                  Wolfgang is a board member, executive adviser and business
                  angel who is global thought leader in supply chain and
                  logistics, driving innovation, expansion and growth across
                  world. He has held top leadership positions at the World
                  Economic Forum, GeoPost, TNT.
                </p>
              </div>
            </div>
            <div className="customerContainer">
              <div className="customerImage">
                <img src={person} />
              </div>
              <div className="cutomerName">
                <h1>KASHYAP CHANDRASEKHAR</h1>
                <img src={indeedLogo} />
              </div>
              <div className="description">
                <p>
                  Kashyap has over 15 years of experience in Robotics R&D for
                  industrial and consumer applications. A leader in robotics
                  field, he has accelerated robotics development for companies
                  like Dyson, Crown Equipment, INRO Technologies, and iRobot.
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="customerContainer">
              <div className="customerImage">
                <img src={customers} />
              </div>
              <div className="cutomerName">
                <h1>NALIN ADVANI</h1>
                <img src={indeedLogo} />
              </div>
              <div className="description">
                <p>
                  A veteran technology entrepreneur, leader and investor, Nalin
                  has over 25 years of experience in AI, Robotics & Warehouse
                  Automation. A technology expert and global leader for
                  companies like Grey Orange, Barco & IBM.
                </p>
              </div>
            </div>
            <div className="customerContainer">
              <div className="customerImage">
                <img src={customerThree} />
              </div>
              <div className="cutomerName">
                <h1>RAGHAV KANORIA</h1>
                <img src={indeedLogo} />
              </div>
              <div className="description">
                <p>
                  Raghav is a pioneer in the angel, acceleration and startup
                  community in East India. He is the first Co-Founder of
                  Calcutta Angels Network and is currently Partner at Anchor
                  Group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvisors;
