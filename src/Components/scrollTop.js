import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "90px",
            right: "38px",
            backgroundColor: "#9b37f2",
            color: "#fff",
            border: "none",
            borderRadius: "30%",
            padding: "4px 4px",
            cursor: "pointer",
            zIndex: "1000",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99622 14.9963L11.9965 8.99609L18.0002 14.9999"
              stroke="white"
              strokeWidth="null"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollTop;
