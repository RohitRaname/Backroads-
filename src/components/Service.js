import React from "react";
import { services } from "../data";

const ServicesList = () => {
  return services.map((service) => (
    <div className="feature-card" key={service._id}>
      <div className="feature-icon-box">
        <i className={`feature-icon ${service.icon}`}></i>
      </div>
      <div className="feature-info">
        <h3 className="feature-title">{service.title}</h3>
        <p>{service.text}</p>
      </div>
    </div>
  ));
};

export default ServicesList;
