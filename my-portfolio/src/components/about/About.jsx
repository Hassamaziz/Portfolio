import React from "react";
import "./about.css";
import ABOUT from "../../assets/Hassam2.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={ABOUT} width={200} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Hassam Aziz, a passionate Web Developer based in Faisalabad,
              Pakistan, with hands-on experience in crafting dynamic websites
              and tailored digital solutions. I specialize in modern web design,
              front-end development, and custom website building.
            </p>
            <a
              href="/Resume_Hassam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View CV
            </a>
          </div>
          <div className="about__skills grid">
            {/*===== First Skill ===== */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End Development</h3>
                <span className="skills__number ">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            {/*===== Second Skill ===== */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-End Development</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage back__end"></span>
              </div>
            </div>

            {/*===== Third Skill ===== */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
