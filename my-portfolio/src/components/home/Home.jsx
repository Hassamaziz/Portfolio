import React from 'react';
import "./home.css";
import Me from "../../assets/HASSAM.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';


const Home = () => {
  return (
    <section className="home container" id="home">
    <div className="intro">
    <img src={Me} width={100} alt="" className="home__img" />
    <h1 className="home__name">Hassam Aziz</h1>
    <span className="home__education">I'm a Front-End Developer</span>

    <HeaderSocials/>

    <a href="#contact" className="btn">Hire Me</a>

    <ScrollDown/>

    </div>
    
      
        
    </section>
  )
}

export default Home
