import React, { useState } from "react";

const GetFaq = ({ data }) => {
  const [faq, setFaq] = useState(false);

  const showFaq = () => {
    setFaq(!faq);
  };

  return (
    <div className="faq__container">
      <span>
        <h3>{data.heading}</h3> <button onClick={showFaq}>+</button>
      </span>

      {faq && (
        <>
          {Object.values(data.qa).map((q, i) => (
            <div key={i} className="faq__qa">
              <h4>{q.question}</h4>
              <p>
                {q.answer}

                {q.list && (
                  <ul>
                    {q.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GetFaq;
