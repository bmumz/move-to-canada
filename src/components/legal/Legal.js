import React from "react";

const Legal = ({ data }) => {
  return (
    <>
      {Object.values(data).map((clause, index) => (
        <div key={index}>
          <h2>{clause.heading}</h2>
          <h3>{clause.title}</h3>
          {clause.paragraphs &&
            clause.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <p>
            <a href='#privacy-policy' className='legal__link'>
              Back to top↑{" "}
            </a>
          </p>
        </div>
      ))}
    </>
  );
};

export default Legal;
