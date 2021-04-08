import React from "react";

const Heading = ({ children, theme, size }) => {
  return (
    <h1 className={`heading ` + `heading__${theme} ` + `heading__${size}`}>
      {children}
    </h1>
  );
};

export default Heading;
