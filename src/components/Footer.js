import React from "react";
import PageLinks from "./resuable/PageLinks";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="footer section" id="footer">
      <div className="section-container">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />

        <div className="footer-icons">
          {socialLinks.map((link) => (
            <a href={link.href} className="footer-icon" key={link._id}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>

        <p className="copyright">
          Copyright &copy; Backroads TRvale Tours Compnay{" "}
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
