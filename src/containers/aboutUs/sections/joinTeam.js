import React from "react";
import angelist from "../../../assets/images/aboutUs/joinTeam/angelist.png";
import ourTeam from "../../../assets/images/aboutUs/joinTeam/ourTeam.png";

function JoinTeam() {
  return (
    <section className="joinTeam">
      <div className="container">
        <div className="joinTeamContainer">
          <div className="joinTeamContent">
            <div className="joinTeamGroup">
              <h1>Join our team</h1>
              <p>
                We are a bunch of fun and passionate people working together to
                design, code and build products that we are proud of. We have
                open positions for a variety of disciplines that may appeal to
                you. Are you passionate about building robots in a fast-paced
                robotics startup?
              </p>
              <p>
                We would love to hear from you! Drop us an email at
                <span>recruitment@botsync.co</span> or apply through following
                links if you are interested to join our close-knit team of
                roboticists here at Botsync.
              </p>
              <div className="joinTeamLogo">
                <img src={angelist} />
                <img src={angelist} />
                <img src={angelist} />
              </div>
            </div>
          </div>
          <div className="imageWrapper">
            <img src={ourTeam} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinTeam;
