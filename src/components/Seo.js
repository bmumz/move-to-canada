import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Helmet } from "react-helmet";

const Seo = ({ pageName }) => {
  const { title } = useSiteMetadata();
  return (
    <Helmet>
      <meta charSet='utf-8' />

      <title>
        {title} | {pageName}
      </title>
      <html lang='en' />
    </Helmet>
  );
};

export default Seo;
