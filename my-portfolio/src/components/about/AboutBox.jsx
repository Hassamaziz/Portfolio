import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">20+</h3>
          <span className="about__subtitle">Projects Built</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-layers"></i>
        <div>
          <h3 className="about__title">1000+</h3>
          <span className="about__subtitle">Hours Practicing & Building</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-screen-smartphone"></i>
        <div>
          <h3 className="about__title">5+</h3>
          <span className="about__subtitle">Tech Stacks Learned</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-bulb"></i>
        <div>
          <h3 className="about__title">Always</h3>
          <span className="about__subtitle">Learning & Innovating</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
