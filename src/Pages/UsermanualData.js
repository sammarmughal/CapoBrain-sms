import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../data/usermanualData.json";
import Navigation from "../Components/Navigation";
import twittercard from "../img/twiiter-card.jpg";

const UserManualData = () => {
  const { id } = useParams();
  const [manualData, setManualData] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(data.sidemenu);
  }, []);
  useEffect(() => {
    const selectedData = data.sidemenu.find((item) => item.id === id);
    setManualData(selectedData);
  }, [id]);

  if (!manualData) {
    return (
      <>
        <section className="relative bg-purple-900">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 max-w-8xl mx-auto text-center">
              <h1 className="heading-hero">Explore Our Software User Manual</h1>
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
        </section>
        <section className="mx-auto">
          <div className="w-full mx-auto max-w-[1800px]">
            <div className="flex flex-col md:flex-row">
              <div className="lg:w-full  md:max-w-[350px] flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-purple-900 to-purple-600 py-4 gap-10 lg:rounded-b-2xl">
                <div className="py-4 w-full">
                  <Navigation menu={menu} />
                </div>
              </div>
              <div className="block p-6">
                <h2 className="text-3xl font-semibold mt-4">
                  Oops! Content not available
                </h2>
                <p className="mt-2 text-lg">
                  Sorry, but the content you are looking for is currently
                  unavailable. Please check back later or contact support for
                  assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <> 
      <Helmet>
        <title>{manualData.meta.title}</title>
        <meta
          name="description"
          content={
            manualData.meta.description.length > 120
              ? manualData.meta.description.slice(0, 120) + "..."
              : manualData.meta.description
          }
        />
        <meta property="og:title" content={manualData.meta.openGraph.title} />
        <meta
          property="og:description"
          content={manualData.meta.openGraph.description}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={manualData.meta.openGraph.url} />
        <meta property="og:type" content={manualData.meta.openGraph.type} />
        <meta property="og:image" content={twittercard} />
        <meta name="twitter:card" content={manualData.meta.twitter.card} />
        <meta name="twitter:title" content={manualData.meta.twitter.title} />
        <meta name="twitter:image" content={twittercard} />
        <meta
          name="twitter:description"
          content={manualData.meta.twitter.description}
        />

        <link rel="canonical" href={manualData.meta.canonical} />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">{manualData.content.heroHeader}</h1>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
      <div className="mx-auto">
        <div className="w-full mx-auto max-w-[1800px]">
          <div className="flex flex-col md:flex-row">
            <div className="lg:w-full md:max-w-[350px] flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-purple-900 to-purple-600 py-4 gap-10 rounded-b-2xl">
              <div className="py-4 w-full">
                <Navigation menu={menu} />
              </div>
            </div>
            <div className="md:max-w-[700px] lg:max-w-[1000px] pl-4 md:w-3/4 mt-3 mx-8 mb-5 text-justify">
              <h2 className="heading-body my-6 text-purple-800">
                {manualData.content.heading}
              </h2>
              <p className="mb-3">{manualData.content.description}</p>
              <ul className="list-disc list-inside mt-4 text-left">
                {manualData.content.details.map((benefit, index) => (
                  <li key={index} className="mb-2">
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <img
                  src={manualData.content.image.src}
                  alt={manualData.content.image.alt}
                  className="max-w-full h-auto rounded-md shadow-lg"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManualData;
