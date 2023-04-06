import React from "react";

// const Link = ({ href, className, text }) => {
const Link = ({ link, className }) => {
  console.log("link", link, className);

  return (
    <li>
      <a href={link.href} className={className}>
        {link.text}
      </a>
    </li>
  );
};

export default Link;
