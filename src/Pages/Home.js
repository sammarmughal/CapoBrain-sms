import React, { useRef, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Waves from "../img/waves.png";
import Desktop from "../img/cta-bg-2.jpg";
import twittercard from "../img/twiiter-card.jpg";
import { Benefit } from "../Components/Benefit";
const Keyfeatures = lazy(() => import("../Components/Keyfeatures"));
const Avatars = lazy(() => import("../Components/Avater"));
const PostSlider = lazy(() => import("../Components/PostSlider"));
const FeatureSlider = lazy(() => import("../Components/FeatureSlider"));
const Pricing = lazy(() => import("../Components/Pricing"));

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef(null);
  const originalSrc =
    "https://www.youtube.com/embed/7k4E6ZveXkI?si=q13MoBvkdhEbuuDA";
  const thumbnailSrc =
    "https://img.youtube.com/vi/7k4E6ZveXkI/maxresdefault.jpg";

  const loadVideo = () => {
    setIsVideoLoaded(true);
  };
  const blockIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = "";
    }
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain offers the best School Management System (SMS) and School ERP Software in Pakistan. Our All-in-One software solutions..."
        />
        <link rel="preload" as="image" href={Waves} />
        <link
          rel="preload"
          href="https://use.typekit.net/sxs8zte.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>{`<link rel="stylesheet" href="https://use.typekit.net/sxs8zte.css" />`}</noscript>
        <link
          rel="preload"
          href="https://p.typekit.net/p.css?s=1&k=sxs8zte&ht=tk&f=54726&a=256&app=typekit&e=css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>{`<link rel="stylesheet" href="https://p.typekit.net/p.css?s=1&k=sxs8zte&ht=tk&f=54726&a=256&app=typekit&e=css" />`}</noscript>
        <link
          rel="preload"
          href="/css/main.ab87456e.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>{`<link rel="stylesheet" href="/css/main.ab87456e.css" />`}</noscript>
        <meta
          name="keywords"
          content="Capobrain, School Management System (SMS), School ERP Software Solutions, Best School Software in Pakistan, All-in-One School Management Software"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Best School Management System | ERP Software solutions in Pakistan
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
        <meta property="og:image" content={twittercard} />
        <meta property="og:url" content="https://capobrain.com/" />
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
        <meta name="twitter:image" content={twittercard} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://capobrain.com/" />
        <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://capobrain.com/",
    "name": "Capobrain",
    "description": "Capobrain offers the best School Management System (SMS) and School ERP Software in Pakistan...",
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
        <div className="relative bg-purple-900">
          <div className="w-full h-full bg-cover bg-top bg-no-repeat">
            <span className="absolute z-20 top-20 sm:left-20 left-5">
              <svg
                width={150}
                height={150}
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse rounded-full"
              >
                <path
                  d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                  fill="url(#paint0_linear_1179_5)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1179_5"
                    x1="76.5"
                    y1={281}
                    x2="76.5"
                    y2="1.22829e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#c5b3ec" stopOpacity="0.38" />
                    <stop offset={1} stopColor="#7653aa" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-20 top-20 z-20">
              <svg
                width={75}
                height={75}
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse"
              >
                <path
                  d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                  fill="url(#paint0_linear_1179_4)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1179_4"
                    x1="-1.63917e-06"
                    y1="37.5"
                    x2={75}
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#c5b3ec" stopOpacity="0.31" />
                    <stop offset={1} stopColor="#7653aa" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className="absloute z-20 py-8 md:pb-12 lg:pt-10 lg:pb-14 min-h-fit">
              <div className="w-full lg:w-5/6 lg:mx-auto text-center relative text-white pt-28 cb-container min-h-fit">
                <span className="absolute left-20 bottom-20 z-20">
                  <svg
                    width={75}
                    height={75}
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-pulse"
                  >
                    <path
                      d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                      fill="url(#paint0_linear_1179_4)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_4"
                        x1="-1.63917e-06"
                        y1="37.5"
                        x2={75}
                        y2="37.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#c5b3ec" stopOpacity="0.31" />
                        <stop offset={1} stopColor="#7653aa" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="pb-4 min-h-fit mb-3 relative">
                  <h1 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-6xl">
                    Online Best School
                    <br />
                    Management System
                  </h1>
                  <span className="absolute z-20 top-10 sm:top-20 right-5 sm:right-20">
                    <svg
                      width={150}
                      height={150}
                      viewBox="0 0 150 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-pulse rounded-full"
                    >
                      <path
                        d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                        fill="url(#paint0_linear_1179_5)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1179_5"
                          x1="76.5"
                          y1={281}
                          x2="76.5"
                          y2="1.22829e-05"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#c5b3ec" stopOpacity="0.38" />
                          <stop
                            offset={1}
                            stopColor="#7653aa"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="pb-4 min-h-fit text-cool-grey-300">
                  <p className="p-text">
                    Easy to use complete all-in-one School Management Software
                  </p>
                </div>
                <div className="flex relative z-30 flex-col md:flex-row gap-3 md:gap-5 justify-center mt-6 mb-10 lg:mb-12 lg:w-1/2 m-auto min-h-fit">
                  <Link
                    to="/requestdemo"
                    className="base-button min-h-fit mx-0 btn-a btn-b bg-white text-purple-800"
                    data-test="webinars-button"
                  >
                    Become a member
                  </Link>
                  <Link
                    to="/usermanual/dashboard"
                    className="base-button min-h-fit mx-0 lg:mx-0 flex-grow-0 btn-a"
                    data-test="webinars-button"
                  >
                    Explore programs
                  </Link>
                </div>
              </div>
              <div className="relative z-30 w-full max-w-[940px] max-h-[1029px] lg:w-2/3 lg:mx-auto min-h-fit">
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
                      <div id="modalBody">
                        <div className="w-full h-full aspect-video">
                          {!isVideoLoaded ? (
                            <div
                              className="w-full h-full flex items-center justify-center bg-transparent relative"
                              style={{
                                backgroundImage: `url(${thumbnailSrc})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                  className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center"
                                  onClick={loadVideo}
                                >
                                  <svg
                                    className="w-8 h-8"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ) : (
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
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute z-1 inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <div className="absolute bottom-20 z-20">
            <img
              src={Waves}
              alt="Waves"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div className="absolute top-0"></div>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Avatars />
        <PostSlider />
        <FeatureSlider />
        <Keyfeatures />
        <Pricing />
      </Suspense>
      <Benefit />
      <section className="relative isolate overflow-hidden bg-purple-900">
        <div className="flex z-50 items-center justify-center py-20 relative">
          <div className="w-full mx-10 lg:justify-between relative z-20 lg:inline-flex lg:items-center lg:max-w-7xl">
            <div className="max-w-2xl mb-4">
              <h3 className="text-white font-extrabold text-3xl sm:text-4xl tracking-tight">
                {" "}
                Learn more about our
                <span className="lg:block">
                  {" "}
                  Advanced Educational Management Software
                </span>
              </h3>
            </div>
            <div className="flex flex-col lg:ml-auto sm:flex-row ">
              <Link
                className="base-button min-h-fit mx-0 btn-a btn-b bg-white text-[#7a12d4]"
                to="/requestdemo"
              >
                {" "}
                Get in touch with us →&nbsp;&nbsp;
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div
              className="aspect-[1108/632] absolute z-75 w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
            <div className="bg-purple-800 opacity-85 z-30 inset-0 absolute"></div>
            <img
              src={Desktop}
              loading="lazy"
              alt="Capobrain School Management Modules"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <svg
            className="absolute inset-0 z-10  h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern"
                width="200"
                height="200"
                x="100%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#pattern)"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
