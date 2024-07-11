import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">25</h3>
          <span className="about__subtitle">Projects Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">1027</h3>
          <span className="about__subtitle">Cups Of Coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">25</h3>
          <span className="about__subtitle">Satisfied Clients</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitle">Hackathons Completed</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
