import React from "react";
import { Link } from "gatsby";

const LinkBuilder = ({ collection }) =>
  collection.map((page, index) => (
    <Link to={page.path} key={index}>
      {page.title}
    </Link>
  ));

export default LinkBuilder;
