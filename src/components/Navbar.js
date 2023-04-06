import React from "react";
import SectionTitle from "./resuable/SectionTitle";
import Link from "./resuable/Link";

import {  socialLinks } from "../data";
import Icon from "./resuable/Icon";
import PageLinks from "./resuable/PageLinks";

const Navbar = () => {
  return (
    <nav className="nav" data-open-menu="false">
      <div className="nav-left">
        <SectionTitle title="Back Roads" />
      </div>

      <div className="nav-center">
      <PageLinks parentClass="nav-links" itemClass="nav-link"/>
        {/* {pageLinks.map((link) => (
          // <Link
          //   href={link.href}
          //   key={link._id}
          //   className="nav-link"
          //   text={link.text}
          // />
        )} */}
      </div>

      <ul className="nav-right nav-icons">
        {socialLinks.map((link) => (
          <Icon
            href={link.href}
            key={link._id}
            className="nav-icon"
            icon={link.icon}
          />
        ))}
      </ul>

      <div className="nav-menu-btn">
        <p></p>
        <p></p>
        <p></p>
      </div>

      <div className="nav-menu">
        <div className="overlay"></div>
        <div className="nav-menu-content">
          {socialLinks.map((link) => (
            <Link
              key={link._id}
              className="nav-link"
              link={link}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
