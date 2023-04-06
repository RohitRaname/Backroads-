import React from "react";
import PageLinks from "./resuable/PageLinks"


const Footer = () => {
  return (
    <footer className="footer section" id="footer">
      <div className="section-container">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />

  

        {/* {socialLinks.map((link) => (
            <a href={link.href} target="_blank" className="footer-icon" key={link._id}>
              <i className={link.icon}></i>
            </a>
          ))} */}

        <p className="copyright">
          Copyright &copy; Backroads TRvale Tours Compnay{" "}
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
