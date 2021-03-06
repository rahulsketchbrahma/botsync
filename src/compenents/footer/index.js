import React from "react";
import Forms from "../form";
import email from "../../assets/images/footer/email.png";
import call from "../../assets/images/footer/call.png";
import Logo from "../../assets/images/navbar/botsyncLogo.png";
import twitter from "../../assets/images/footer/twitter.png";
import locations from "../../assets/images/footer/locations.png";
import arrows from "../../assets/images/footer/target.png";
import groups from "../../assets/images/footer/groups.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContainer">
          <div className="footerGroup">
            <div className="footerContent">
              <div className="footerSchedule">
                <h1>Schedule a live demo now</h1>
                <h6>
                  Seeing is believing so we want you to see how easy it is to
                  transit from manual to automated factor/warehouse operations
                  with our MAG AMRs.
                </h6>
              </div>
              <div className="contactDetails">
                <div className="emailDetails">
                  <img src={email} />
                  <p>sales@botsync.co</p>
                </div>
                <div className="emailDetails">
                  <img src={call} />
                  <p>+65 8590 4386</p>
                </div>
              </div>
            </div>
            <div className="form">
              <Forms />
            </div>
          </div>
          <div className="footerInfo">
            <div className="infoContent">
              <a href="/">
                <img src={Logo} />
              </a>
              <p>
                We build AMR automation solution that is deployable within days
                for intralogistics operations in warehouses and factories.
              </p>
              <div className="teamLogo">
                <ul>
                  <li>
                    <a href="/">
                      <img src={twitter} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={twitter} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="links">
              <h6>Quick Links</h6>
              <a href="/">Industrial Automation</a>
              <a href="/">Botsync Labs</a>
              <a href="/">Company</a>
              <a href="/">Blog</a>
              <a href="/">Contacts</a>
            </div>
            <div className="contact">
              <h6>Contact Info</h6>
              <div className="locations">
                <img src={locations} />
                <div className="address">
                  <p>
                    79 Joo Koon Circle Level 2 Wong Fong Building Singapore
                    629107
                  </p>
                  <div className="direction">
                    <img src={arrows} />
                    <p>Get Directions</p>
                  </div>
                </div>
              </div>
              <div className="locations">
                <img src={locations} />
                <div className="address">
                  <p>
                    79 Joo Koon Circle Level 2 Wong Fong Building Singapore
                    629107
                  </p>
                  <div className="direction">
                    <img src={arrows} />
                    <p>Get Directions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="latest">
              <h6>Latest News</h6>
              <div className="content">
                <img src={groups} />
                <div className="description">
                  <h5>
                    We believe in #flexibility so that our customers can remain
                    agile!
                  </h5>
                  <p>5 days ago</p>
                </div>
              </div>
              <div className="content">
                <img src={groups} />
                <div className="description">
                  <h5>
                    We believe in #flexibility so that our customers can remain
                    agile!
                  </h5>
                  <p>5 days ago</p>
                </div>
              </div>
              <div className="content">
                <img src={groups} />
                <div className="description">
                  <h5>
                    We believe in #flexibility so that our customers can remain
                    agile!
                  </h5>
                  <p>5 days ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyRights">
            <p>Copyright ?? 2022. All rights reserved.</p>
            <div className="policy">
              <ul>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
