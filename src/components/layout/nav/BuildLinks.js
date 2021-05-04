import React from "react";
import { Link } from "gatsby";

const BuildLinks = ({ collection }) =>
  collection.map((page, index) => (
    <Link to={page.path} key={index}>
      {page.title}
    </Link>
  ));

export default BuildLinks;
