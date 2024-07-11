import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {/*====== Education Data ======*/}
          {Data.map(( val, id ) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  year={val.year}
                  title={val.title}
                  desc={val.desc}
                />
              );
            }
          })} 
          </div>

          {/*====== Experience Data ======*/}
          <div className="timeline grid">
          {Data.map(( val, index ) => {
            if (val.category === "experience") {
              return(
                <Card
                  key={index}
                  icon={val.icon}
                  year={val.year}
                  title={val.title}
                  desc={val.desc}
                />
              )
            }
          })}
          </div>
       
      </div>
    </section>
  );
};

export default Resume;
