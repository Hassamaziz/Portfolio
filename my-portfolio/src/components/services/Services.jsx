import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/backend1.png"

const data = [
  {
    id: 1,
    image: Image2,
    title: "Front-End Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image3,
    title: "Back-End Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image1,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
   <section className="services container section" id='services'>
   <h2 className="section__title">Services</h2>

   <div className="services__container grid">
   {data.map(({id,image,title,description}) => {

    return(
      <div className="services__card" key={id}>
      <img width={100} src={image} className='services__img' alt="" />
      <h3 className="services__title">{title}</h3>
      <p className="services__description">
      {description}
      </p>
      </div>
   );

   })}
   </div>
   </section>
  )
}

export default Services
