import React from "react";
import aboutimage from "../../../assets/images/aboutUs/about/aboutImage.png";
import "../aboutUs.scss";

const About = () => {
  return (
    <section className="aboutUs">
      <div className="container">
        <div className="aboutUsContainer">
          <div className="imageWrapper">
            <img src={aboutimage} alt="" />
          </div>
          <div className="group">
            <div className="content">
              <h1>About Us</h1>
              <p>
                Botsync was started by 4 roboticists who wanted to turn their
                passion for robotics into an industrial breakthrough. This
                turned into a journey to build innovative automation solutions
                to drive the transformation of Industry 4.0. With our
                intelligent autonomous mobile robots, we envision to become the
                go-to automation solution provider for internal logistics
                movement in the APAC market.
                <br />
                At Botsync, we believe that it's not a lack of knowledge, but a
                lack of drive to acquire the knowledge which stands in the way
                of building something. Our company aim to build systems that not
                only solve problems but are safe and simple to be used by almost
                anyone.
              </p>
            </div>
            <div className="content">
              <h1>Vision Us</h1>
              <p>
                Building a more accessible and simplified automation solution
                for the world.
              </p>
            </div>
            <div className="content">
              <h1>Mission</h1>
              <p>
                To be the partner of choice for intralogistics automation, by
                building robots that are safe, reliable and most importantly
                simple to deploy and use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
