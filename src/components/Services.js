import React from "react";
import SectionTitle from "./resuable/SectionTitle";
import ServicesList from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
        <SectionTitle title="Our Services" />
      <div className="section-container">
        <ServicesList/>

      
        
      </div>
    </section>
  );
};

export default Services;
