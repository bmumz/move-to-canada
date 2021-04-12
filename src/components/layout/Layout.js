import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <span className='layout'>{children}</span>
    </div>
  );
};

export default Layout;
