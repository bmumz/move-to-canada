import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Seo = ({ pageName, tags }) => {
  const { title, description, keywords, siteUrl } = useSiteMetadata();
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />

      <title>
        {title} | {pageName}
      </title>

      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        name="description"
        content={description}
      />
      <meta name="keywords" content={keywords + tags} />

      <meta property="og:url" name="url" content={siteUrl} />
      <meta property="og:image" content="../images/move-to-canada.png" />
    </Helmet>
  );
};

Seo.propTypes = {
  tags: PropTypes.array,
};

export default Seo;
