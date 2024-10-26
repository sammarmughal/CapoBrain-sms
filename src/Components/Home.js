import React,{useRef , useEffect , useState} from "react";
import Img from "../img/main-section-bg.png";
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
      <section className="">
        <div className="relative">
          <div className="">
            <div className="block z-10 overlay"></div>
            <div
              className="w-full h-full bg-cover bg-top bg-no-repeat"
              style={{
                backgroundImage: `url(${Img})`,
              }}
            >
              <div className="absloute py-8 md:pb-12 lg:pt-10 lg:pb-14 min-h-fit">
                <div className="w-full lg:w-5/6 lg:mx-auto text-center relative text-white pt-20 cb-container min-h-fit">
                  <div className="pb-4 min-h-fit mb-3 lg:mb-5">
                    <h1 className="text-5xl lg:text-7xl font-black">
                      A better you
                      <br />
                      every day
                    </h1>
                  </div>
                  <div className="pb-4 min-h-fit text-cool-grey-300">
                    <p className="text-lg lg:text-2xl">
                      Be part of the world’s most powerful life transformation
                      platform
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center mt-6 mb-10 lg:mb-12 lg:w-1/2 m-auto min-h-fit">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="base-button min-h-fit mx-0 btn-a btn-b bg-white text-[#7a12d4]"
                      data-test="webinars-button"
                    >
                      Become a member
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="base-button min-h-fit mx-0 lg:mx-0 flex-grow-0 btn-a"
                      data-test="webinars-button"
                    >
                      Explore programs
                    </a>
                  </div>
                </div>
                <div className="w-full max-w-[940px] max-h-[529px] lg:w-2/3 lg:mx-auto cb-container min-h-fit">
                  <div className="overflow-hidden mx-auto video-js hide-play-button rounded-lg">
                    <div
                      data-backdrop="static"
                    >
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
                              width="560"
                              height="315"
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
        </div>
      </section>
    </>
  );
}
