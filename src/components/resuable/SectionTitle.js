import React from "react";

const SectionTitle = ({ title }) => {
  const [blackText, blueText] = title.split(" ");
  return (
    <div className="section-title">
      <span className="section-title-black">{blackText}</span>
      &nbsp;
      <span className="section-title-blue">{blueText}</span>
    </div>
  );
};

export default SectionTitle;
