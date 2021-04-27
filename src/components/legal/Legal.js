import React from "react";
import Paragraph from "../layout/Paragraph";
import Heading from "../ui/Heading";

const Legal = ({ data }) => {
  return (
    <>
      {Object.values(data).map((clause, index) => (
        <div key={index}>
          <Heading size='md' color='black'>
            {clause.heading}
          </Heading>
          <Heading size='sm' color='grey'>
            {clause.title}
          </Heading>
          {clause.paragraphs ? (
            clause.paragraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)
          ) : (
            <Paragraph>{clause.paragraph}</Paragraph>
          )}
          <Paragraph>
            <a href='#privacy-policy' className='legal__link'>
              Back to top↑{" "}
            </a>
          </Paragraph>
        </div>
      ))}
    </>
  );
};

export default Legal;
