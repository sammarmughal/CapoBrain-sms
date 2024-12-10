import React, { useRef, useState } from "react";
import Img from "../img/main-section-bg.jpg";
import Keyfeatures from "../Components/Keyfeatures";
import { Benefits } from "../Components/Benefits";
import Logos from "../Components/Logos";
import Avatars from "../Components/Avater";
import PostSlider from "../Components/PostSlider";
import FeatureSlider from "../Components/FeatureSlider";
import Pricing from "../Components/Pricing";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Home() {
  const iframeRef = useRef(null);
  const [originalSrc] = useState(
    "https://www.youtube.com/embed/7k4E6ZveXkI?si=q13MoBvkdhEbuuDA"
  );

  function blockIframe() {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = "";
    }
  }

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain offers the best School Management System (SMS) and School ERP Software in Pakistan. Our All-in-One software solutions include student information, fee management, attendance, timetable scheduling, and more. Customizable, affordable, and mobile-friendly school software for institutions of all sizes. Try Capobrain today for seamless school management."
        />
        <meta
          name="keywords"
          content="Capobrain, School Management System (SMS), School ERP Software Solutions, Best School Software in Pakistan, All-in-One School Management Software"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Capobrain - Best School Management System Software in Pakistan |
          All-in-One School ERP Software Solutions
        </title>

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Capobrain - Best School Management System Software in Pakistan | All-in-One School ERP Solutions"
        />
        <meta
          property="og:description"
          content="Capobrain offers the best School Management System (SMS) and School ERP Software in Pakistan. Our customizable, mobile-friendly software covers student information, fee management, attendance, and more for schools of all sizes."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_WEBSITE_URL" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:title"
          content="Capobrain - Best School Management System Software in Pakistan | All-in-One School ERP Solutions"
        />
        <meta
          name="twitter:description"
          content="Capobrain offers the best School Management System (SMS) and School ERP Software in Pakistan. Customizable, mobile-friendly, and affordable school software for fee management, attendance, timetable scheduling, and more."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": url,
            "name": "Capobrain",
            "description": description ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://capobrain.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </Helmet>
      <section>
        <div className="relative">
            <div className="block z-10 overlay"></div>
            <div
              className="w-full h-full bg-cover bg-top bg-no-repeat"
              style={{
                backgroundImage: `url(${Img})`,
              }}
            >
              <div className="absloute py-8 md:pb-12 lg:pt-10 lg:pb-14 min-h-fit">
                <div className="w-full lg:w-5/6 lg:mx-auto text-center relative text-white pt-28 cb-container min-h-fit">
                  <div className="pb-4 min-h-fit mb-3">
                    <h1 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-6xl">
                      Online Best School
                      <br />
                      Management System
                    </h1>
                  </div>
                  <div className="pb-4 min-h-fit text-cool-grey-300">
                    <p className="p-text">
                      Easy to use complete all-in-one School Management Software
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center mt-6 mb-10 lg:mb-12 lg:w-1/2 m-auto min-h-fit">
                    <Link
                      to="/requestdemo"
                      className="base-button min-h-fit mx-0 btn-a btn-b bg-white text-purple-800"
                      data-test="webinars-button"
                    >
                      Become a member
                    </Link>
                    <Link
                      to="/features"
                      className="base-button min-h-fit mx-0 lg:mx-0 flex-grow-0 btn-a"
                      data-test="webinars-button"
                    >
                      Explore programs
                    </Link>
                  </div>
                </div>
                <div className="w-full max-w-[940px] max-h-[1029px] lg:w-2/3 lg:mx-auto min-h-fit">
                  <div className="overflow-hidden mx-auto video-js hide-play-button rounded-3xl">
                    <div data-backdrop="static">
                      <div className="rounded-0 relative">
                        <div className="">
                          <button
                            type="button"
                            id="closeBtn"
                            className="btn-close btn-close absolute top-2 right-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={blockIframe}
                          ></button>
                        </div>
                        <div className="" id="modalBody">
                          <div className="w-full h-full aspect-video ">
                            <iframe
                              ref={iframeRef}
                              width="860"
                              height="915"
                              src={originalSrc}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              loading="lazy"
                              className="w-full h-full"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>          
        </div>
      </section>
      {/* <Logos /> */}
      <Avatars />
      <PostSlider />
      <FeatureSlider />
      <Keyfeatures />
      <Pricing />
      <Benefits />
    </>
  );
}
