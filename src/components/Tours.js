import React from "react";
import SectionTitle from "./resuable/SectionTitle";
import TourList from "./Tour";

const Tours = () => {
  return (
    <section className="section tours" id="tours">
      <SectionTitle title="Featured Tours" />
      <div className="section-container">
        <TourList />
      </div>
    </section>
  );
};

export default Tours;
