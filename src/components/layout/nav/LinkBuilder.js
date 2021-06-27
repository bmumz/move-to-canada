import React from "react";
import { Link } from "gatsby";
import servicesData from "../../../data/services-data";
import { serviceRoutes } from "../../../routes";

const LinkBuilder = ({ collection }) =>
  collection.map((page, index) => (
    <div
      className={page.path === "/services" ? "navbar__services--anchor" : null}
      key={index}
    >
      <Link to={page.path} className="navbar__main">
        {page.title}
      </Link>

      {page.path === "/services" && (
        <div className="navbar__services">
          {serviceRoutes.map((s, i) => (
            <Link to={s.path} key={i}>
              {s.page}
            </Link>
          ))}
        </div>
      )}
    </div>
  ));

export default LinkBuilder;
