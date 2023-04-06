import React from "react";
import { socialLinks } from "../data";
import Icon from "./resuable/Icon.js";

const FooterIcons = () => {
  return (
    <ul className="footer-icons">
      {socialLinks.map((link) => (
        <Icon
          href={link.href}
          key={link._id}
          className="footer-icon"
          icon={link.icon}
        />
      ))}
    </ul>
  );
};

export default FooterIcons;
