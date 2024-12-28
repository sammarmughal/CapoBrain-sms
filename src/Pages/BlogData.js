import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet";
import twittercard from "../img/twiiter-card.jpg";

export default function Blogcat() {
  const { postSlug } = useParams();
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch(
          `https://capobrain-backend.vercel.app/api/auth/getpost/${postSlug}`,
          { method: "GET" }
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      } finally {
        setLoading(false); 
      }
    };
    postData();
  }, [postSlug]);
  const injectAltAttributes = (htmlContent) => {
    if (!htmlContent) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    doc.querySelectorAll("img").forEach((img, index) => {
      if (!img.alt || img.alt.trim() === "") {
        img.alt = posts.title || `Blog Image ${index + 1}`;
      }
    });

    return doc.body.innerHTML;
  };

  const sanitizedContent = {
    __html: DOMPurify.sanitize(injectAltAttributes(posts.content)),
  };
  // const sanitizedContent = { __html: DOMPurify.sanitize(posts.content) };
  const metaDescription = posts.content
  ? posts.content.replace(/<[^>]*>/g, '').slice(0, 120) + '...'
  : '';
  const metaTitle = posts.title ? posts.title.slice(0, 50) : "Default Title";


  return (
    <>
     <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="school management software, education technology, Capobrain, education transformation"
        />
        <meta name="robots" content="index, follow" />
        <title>{metaTitle}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={posts.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={twittercard} />
        <meta property="og:url" content={`https://capobrain.com/${postSlug}`}/>
        <meta property="og:type" content="article" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content={posts.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={twittercard} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://capobrain.com/blog/${postSlug}`}/>

      </Helmet>
      {loading ? (
       
        <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero"> Loading... </h1>
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
      ) : (
        <>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero"> {posts.title} </h1>
          </div>
        </div>
        <div className="cb-container">
          <div className="w-full pb-8">
            <ul className="flex items-center">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center text-base font-medium hover:text-primary text-white"
                >
                  <span className="">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      className="fill-current"
                    >
                      <path d="M13.3503 14.6503H10.2162C9.51976 14.6503 8.93937 14.0697 8.93937 13.3729V10.8182C8.93937 10.5627 8.73043 10.3537 8.47505 10.3537H6.54816C6.29279 10.3537 6.08385 10.5627 6.08385 10.8182V13.3497C6.08385 14.0464 5.50346 14.627 4.80699 14.627H1.62646C0.929989 14.627 0.349599 14.0464 0.349599 13.3497V5.24431C0.349599 4.89594 0.535324 4.5708 0.837127 4.385L6.96604 0.506501C7.29106 0.297479 7.73216 0.297479 8.05717 0.506501L14.1861 4.385C14.4879 4.5708 14.6504 4.89594 14.6504 5.24431V13.3265C14.6504 14.0697 14.07 14.6503 13.3503 14.6503ZM6.52495 9.54086H8.45184C9.14831 9.54086 9.7287 10.1215 9.7287 10.8182V13.3497C9.7287 13.6052 9.93764 13.8142 10.193 13.8142H13.3503C13.6057 13.8142 13.8146 13.6052 13.8146 13.3497V5.26754C13.8146 5.19786 13.7682 5.12819 13.7218 5.08174L7.61608 1.20324C7.54643 1.15679 7.45357 1.15679 7.40714 1.20324L1.27822 5.08174C1.20858 5.12819 1.18536 5.19786 1.18536 5.26754V13.3729C1.18536 13.6284 1.3943 13.8374 1.64967 13.8374H4.80699C5.06236 13.8374 5.2713 13.6284 5.2713 13.3729V10.8182C5.24809 10.1215 5.82848 9.54086 6.52495 9.54086Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.51145 1.55106L13.465 5.33294V13.3497C13.465 13.412 13.4126 13.4644 13.3503 13.4644H10.193C10.1307 13.4644 10.0783 13.412 10.0783 13.3497V10.8182C10.0783 9.92832 9.34138 9.19112 8.45184 9.19112H6.52495C5.63986 9.19112 4.89529 9.92522 4.9217 10.8237V13.3729C4.9217 13.4352 4.86929 13.4877 4.80699 13.4877H1.64967C1.58738 13.4877 1.53496 13.4352 1.53496 13.3729V5.33311L7.51145 1.55106ZM1.27822 5.08174L7.40714 1.20324C7.45357 1.15679 7.54643 1.15679 7.61608 1.20324L13.7218 5.08174C13.7682 5.12819 13.8146 5.19786 13.8146 5.26754V13.3497C13.8146 13.6052 13.6057 13.8142 13.3503 13.8142H10.193C9.93764 13.8142 9.7287 13.6052 9.7287 13.3497V10.8182C9.7287 10.1215 9.14831 9.54086 8.45184 9.54086H6.52495C5.82848 9.54086 5.24809 10.1215 5.2713 10.8182V13.3729C5.2713 13.6284 5.06236 13.8374 4.80699 13.8374H1.64967C1.3943 13.8374 1.18536 13.6284 1.18536 13.3729V5.26754C1.18536 5.19786 1.20858 5.12819 1.27822 5.08174ZM13.3503 15H10.2162C9.32668 15 8.58977 14.2628 8.58977 13.3729V10.8182C8.58977 10.7559 8.53735 10.7035 8.47505 10.7035H6.54816C6.48587 10.7035 6.43345 10.7559 6.43345 10.8182V13.3497C6.43345 14.2396 5.69654 14.9768 4.80699 14.9768H1.62646C0.736911 14.9768 0 14.2396 0 13.3497V5.24431C0 4.77131 0.251303 4.33591 0.651944 4.08836L6.77814 0.211575C7.21781 -0.0705255 7.80541 -0.0705251 8.24508 0.211576C8.24546 0.211821 8.24584 0.212066 8.24622 0.212311L14.3713 4.08838C14.7853 4.34424 15 4.78759 15 5.24431V13.3265C15 14.2587 14.2671 15 13.3503 15ZM14.1861 4.385L8.05717 0.506501C7.73216 0.297479 7.29106 0.297479 6.96604 0.506501L0.837127 4.385C0.535324 4.5708 0.349599 4.89594 0.349599 5.24431V13.3497C0.349599 14.0464 0.929989 14.627 1.62646 14.627H4.80699C5.50346 14.627 6.08385 14.0464 6.08385 13.3497V10.8182C6.08385 10.5627 6.29279 10.3537 6.54816 10.3537H8.47505C8.73043 10.3537 8.93937 10.5627 8.93937 10.8182V13.3729C8.93937 14.0697 9.51976 14.6503 10.2162 14.6503H13.3503C14.07 14.6503 14.6504 14.0697 14.6504 13.3265V5.24431C14.6504 4.89594 14.4879 4.5708 14.1861 4.385Z"
                      />
                    </svg>
                  </span>
                </Link>
                <span className="px-3 text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 8.55001L10.3781 2.64376C10.125 2.39064 9.73126 2.39064 9.47813 2.64376C9.22501 2.89689 9.22501 3.29064 9.47813 3.54376L14.2031 8.35314H2.25001C1.91251 8.35314 1.63126 8.63439 1.63126 8.97189C1.63126 9.30939 1.91251 9.61876 2.25001 9.61876H14.2594L9.47813 14.4844C9.22501 14.7375 9.22501 15.1313 9.47813 15.3844C9.59063 15.4969 9.75938 15.5531 9.92813 15.5531C10.0969 15.5531 10.2656 15.4969 10.3781 15.3563L16.2 9.45001C16.4531 9.19689 16.4531 8.80314 16.2 8.55001Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center">
                <Link
                  to="/blog"
                  className="text-base cursor-pointer font-medium text-white hover:text-primary"
                >
                  Blogs
                </Link>
                <span className="px-3 text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 8.55001L10.3781 2.64376C10.125 2.39064 9.73126 2.39064 9.47813 2.64376C9.22501 2.89689 9.22501 3.29064 9.47813 3.54376L14.2031 8.35314H2.25001C1.91251 8.35314 1.63126 8.63439 1.63126 8.97189C1.63126 9.30939 1.91251 9.61876 2.25001 9.61876H14.2594L9.47813 14.4844C9.22501 14.7375 9.22501 15.1313 9.47813 15.3844C9.59063 15.4969 9.75938 15.5531 9.92813 15.5531C10.0969 15.5531 10.2656 15.4969 10.3781 15.3563L16.2 9.45001C16.4531 9.19689 16.4531 8.80314 16.2 8.55001Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </li>
              <li className="text-base font-medium text-white">
              {posts.title}
              </li>
            </ul>
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
        <div className="cb-container pb-10">
          <div
            className="mt-5 blog-cont"
            dangerouslySetInnerHTML={sanitizedContent}
          ></div>
        </div>
        </>
      )}
    </>
  );
}
