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
              I am Hassam Aziz, Web Developer from Faisalabad, Pakistan. I have
              rich experience in website design and building and customization,
              also I am good at Mobile App Design.
            </p>
            <a href="/Resume_Hassam.pdf" target="_blank" rel="noopener noreferrer" className="btn">View CV</a>
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
      <AboutBox/>
    </section>
  );
};

export default About;
