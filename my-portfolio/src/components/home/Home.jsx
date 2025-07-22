import React from 'react';
import "./home.css";
import Me from "../../assets/profile.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { ReactTyped as Typed } from 'react-typed'; 

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} width={100} style={{borderRadius:'30% 70% 70% 30% / 30% 30% 70% 70%  '}} alt="" className="home__img" />
        <h1 className="home__name">Hassam Aziz</h1>
        <span className="home__education">
          I'm&nbsp;
          <Typed
            strings={["a Mern Stack Developer", "a Programmer", "a Problem Solver", "an Overthinker"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>
    </section>
  );
}

export default Home;
