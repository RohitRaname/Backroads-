import React from "react";
import Link from "./Link";
import { pageLinks } from "../../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        const { _id } = link;
        return (
          <Link key={_id} link={link} className={itemClass} />
          // <Link key={_id} {...link} className={itemClass} />
          // <a
          //   key={_id}
          //   href={`#${href}`}

          //   className={itemClass}
          // >
          //   {text}
          // </a>
        );
      })}
    </ul>
  );
};

export default PageLinks;
