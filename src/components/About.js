import React from "react";
import SectionTitle from "./resuable/SectionTitle";
import aboutImg from "../images/about.jpeg";

const About = () => {
  return (
    <section className="section about" id="about">
        <SectionTitle title="About Us"></SectionTitle>
      <div className="section-container">

          <div className="about-img-container">
            <img className="about-img" src={aboutImg} alt="" />
          </div>

          <div className="about-info">
            <h2>Explore The Difference</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              adipisci ratione exercitationem, obcaecati soluta sed voluptatum
              pariatur eaque aperiam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              adipisci ratione exercitationem, obcaecati soluta sed voluptatum
              pariatur eaque aperiam.
            </p>

            <button className="btn">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default About;
