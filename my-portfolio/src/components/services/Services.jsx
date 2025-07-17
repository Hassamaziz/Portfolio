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
      "Crafting responsive, visually appealing user interfaces using HTML, CSS, JavaScript, and modern frameworks like React. Emphasizing performance, accessibility, and pixel-perfect design.",
  },
  {
    id: 2,
    image: Image3,
    title: "Back-End Development",
    description:
      "Developing secure and scalable server-side applications using Node.js, Express, and databases like MongoDB. Ensuring smooth API integration and efficient data handling.",
  },
  {
    id: 3,
    image: Image1,
    title: "UI/UX Design",
    description:
      "Designing intuitive and user-centered digital experiences. Creating wireframes, prototypes, and design systems using Figma and Adobe XD to enhance usability and user satisfaction.",
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
