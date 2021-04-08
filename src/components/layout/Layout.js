import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <span className="layout">{children}</span>
    </div>
  );
};

export default Layout;
