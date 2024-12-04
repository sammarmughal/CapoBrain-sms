import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
     <Helmet>
    <title>404 - Page Not Found | CapoBrain</title>
    <meta
      name="description"
      content="Looking for the best school management software and school software solutions in Pakistan? CapoBrain provides affordable and efficient tools for managing your school operations. Navigate back to our homepage to explore our solutions."
    />
    <meta
      name="keywords"
      content="School Software Solutions in Pakistan, Best School Management Software, School Management System, School ERP Software, Affordable School Software"
    />
  </Helmet>
    <section
    className="flex items-center h-screen p-16"
    style={{
      backgroundImage: "linear-gradient(135deg, #684ca0 35%, #1c4ca0 100%)",
    }}
  >
     <div className="container flex flex-col items-center">
    <div className="flex flex-col gap-6 max-w-lg text-center">
      <h1 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
        <span className="sr-only">Error</span>404
      </h1>
      <p className="text-2xl md:text-3xl dark:text-gray-300">
        Oops! It seems like this page is missing. While you're here, discover how 
        CapoBrain provides the <strong>best school management software</strong> and 
        <strong> school software solutions in Pakistan</strong> to streamline your school operations.
      </p>
      <Link
        to="/"
        className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
      >
        Back to Home
      </Link>
    </div>
  </div>
  </section>
  </>
  );
};

export default NotFound;
