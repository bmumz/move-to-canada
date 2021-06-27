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
          <ul>
            {serviceRoutes.map((s, i) => (
              <Link to={s.path} key={i}>
                <li>{s.page}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  ));

export default LinkBuilder;
