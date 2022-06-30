import React from "react";
import seedsCapital from "../../../assets/images/aboutUs/partners/seedsCapital.png";
import artesion from "../../../assets/images/aboutUs/partners/artesion.png";
import angleCub from "../../../assets/images/aboutUs/partners/angleCub.png";
import singapor from "../../../assets/images/aboutUs/partners/singapor.png";
import wong from "../../../assets/images/aboutUs/partners/wong.png";
import brimc from "../../../assets/images/aboutUs/partners/brimc.png";
const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partnersContainer">
          <div className="commonHeading">
            <h1>Our Supporting Partners</h1>
          </div>
          <div className="partnersLogo">
            <img src={seedsCapital} />
            <img src={artesion} />
            <img src={angleCub} />
            <img src={singapor} />
            <img src={wong} />
            <img src={brimc} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
