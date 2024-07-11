import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";


const Portfolio = () => {
  const[items,setitems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setitems(updatedItems);
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={()=>setitems(Menu)}>Everything</span>
        <span className="work__item" onClick={()=>filterItem("Static")}>Static</span>
        <span className="work__item" onClick={()=>filterItem("Dynamic")}>Dynamic</span>
        <span className="work__item" onClick={()=>filterItem("Tailwind")}>Tailwind</span>
        
     
      </div>

      <div className="work__container grid">
      {items.map((elem) => {
        const{id,image,title,category,link} =elem;
        return(
          <div className="work__card" key={id}>
          <div className="work__thumbnail">
          <img src={image} alt={title} style={{height:"11rem"}} className="work__img" />
          <div className="work__mask"></div>
          </div>
          <span className="work__category">{category}</span>
          <h3 className="work__title">{title}</h3>
          <a href={link} target="_blank"  className="work__button">
          <i className="icon-link work__button-icon"></i>
          </a>
          </div>
        )
      })}
      
      </div>
    </section>
  );
};

export default Portfolio;
