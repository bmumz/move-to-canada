import React from "react";

import { Helmet } from "react-helmet";

const Seo = ({ pageName }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />

      <title>Move to Canada | {pageName}</title>

      <html lang="en" />
    </Helmet>
  );
};

export default Seo;
