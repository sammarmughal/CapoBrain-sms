import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import twittercard from "../img/twiiter-card.jpg";

const NotFound = () => {
  return (
    <>
  <Helmet>
  <title>404 - Page Not Found | CapoBrain</title>
  <meta
    name="description"
    content="The page you’re looking for could not be found. Discover CapoBrain’s best school management software and affordable school ERP solutions in Pakistan."
  />
  <meta
    name="keywords"
    content="404 Error, Page Not Found, School Software Solutions, Best School Management Software, CapoBrain School ERP"
  />
  <meta property="og:title" content="404 - Page Not Found | CapoBrain" />
  <meta
    property="og:description"
    content="The page you’re looking for could not be found. Explore CapoBrain’s school management software and ERP solutions to streamline school operations."
  />
  <meta property="og:url" content="https://capobrain.com/404" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content={twittercard}
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="404 - Page Not Found | CapoBrain" />
  <meta
    name="twitter:description"
    content="Oops! The page you’re looking for isn’t here. Discover CapoBrain’s leading school management system and ERP solutions in Pakistan."
  />
  <meta
    name="twitter:image"
    content={twittercard}
  />
</Helmet>

    <section
    className="flex items-center h-screen p-16"
    style={{
      backgroundImage: "linear-gradient(135deg, #684ca0 35%, #1c4ca0 100%)",
    }}
  >
     <div className="container flex flex-col items-center">
    <div className="flex flex-col gap-6 max-w-3xl text-center">
      <h1 className="font-extrabold sm:text-5xl text-3xl  text-gray-600 dark:text-gray-100">
        <span className="sr-only">Error</span>404 Page Not Found 
      </h1>
      <p className="text-lg md:text-xl dark:text-gray-300">
        Oops! It seems like this page is not found or missing. While you're here, discover how 
        CapoBrain provides the <strong>best school management software</strong> and 
        <strong> school software solutions in Pakistan</strong> to streamline your school operations.
      </p>
      <div className="max-w-lg mx-auto">
      <Link
        to="/"
        className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
      >
        Back to Home
      </Link>
      </div>
    </div>
  </div>
  </section>
  </>
  );
};

export default NotFound;
