import React from "react";

const Icon = ({ href, icon, className }) => {
  return (
    <li>

    <a href={href} target="_blank" className={className} icon={icon}>
      <i className={icon}></i>
    </a>
    </li>
  );
};

export default Icon;
