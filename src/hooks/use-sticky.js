import React, { useEffect, useState, useRef } from "react";

const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  const navElement = useRef(null);

  const handleScroll = () => {
    window.scrollY > navElement.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return function () {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  useEffect(() => {
    window.addEventListener("--sticky", debounce(handleScroll));
    return () => {
      window.removeEventListener("--sticky", () => handleScroll);
    };
  }, [handleScroll]);

  return { sticky, navElement };
};

export default useSticky;
