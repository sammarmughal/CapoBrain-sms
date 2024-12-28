import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import featurePagesData from "../data/featurePagesData.json";
import capobrain from "../img/cta-bg.jpg";
import Welcome from "../Components/Welcome";
import twittercard from "../img/twiiter-card.jpg";

function FeaturePage() {
  const { slug } = useParams();
  const feature = featurePagesData.features.find((f) => f.slug === slug);

  if (!feature) {
    return (
      <>
        <section className="relative bg-purple-900">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 max-w-8xl mx-auto text-center">
              <h1 className="heaging-hero">Feature not found</h1>
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
        </section>{" "}
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>{feature.meta.title}</title>
        <meta
          name="description"
          content={
            feature.meta.description.length > 120
              ? feature.meta.description.slice(0, 120) + "..."
              : feature.meta.description
          }
        />

        <meta property="og:title" content={feature.meta.openGraph.title} />
        <meta
          property="og:description"
          content={feature.meta.openGraph.description}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={feature.meta.openGraph.url} />
        <meta property="og:type" content={feature.meta.openGraph.type} />
        <meta
          property="og:image"
          content={twittercard}
        />
        <meta name="twitter:card" content={feature.meta.twitter.card} />
        <meta name="twitter:title" content={feature.meta.twitter.title} />
        <meta name="twitter:image" content={twittercard} />
        <meta
          name="twitter:description"
          content={feature.meta.twitter.description}
        />
        <link rel="canonical" href={feature.meta.canonical} />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">{feature.content.heroHeader}</h1>
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
                  to="/features"
                  className="text-base cursor-pointer font-medium text-white hover:text-primary"
                >
                  Features
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
                {feature.slug
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
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
      <section className="cb-container mt-6 sm:mt-10 px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-800">
            Capobrain <strong> {feature.content.heading} </strong>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            {feature.content.description}
          </p>
        </div>
        <div
          className="items-center grid lg:grid-cols-2 mx-auto overflow-x-hidden lg:grid xl:pt-6"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* Text Content */}
          <div className="pr-2 md:mb-14 py-14 md:py-0">
            <h3 className="text-2xl font-bold text-purple-800 sm:text-3xl">
              {feature.content.imageheading}
            </h3>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              {feature.content.imagepara}
            </p>
            {/* <div className="mt-4">
              <Link
                to="/contact"
                className="px-5 py-3 text-lg tracking-wider text-white bg-purple-500 rounded-lg md:px-8 hover:bg-purple-600 group"
              >
                <span>Explore More</span>
              </Link>
            </div> */}
          </div>

          {/* Image */}
          {/* <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img
              id="heroImg1"
              className="transition-all duration-300 object-contain ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src={feature.content.imagecontent}
              alt={feature.content.imagealt}
              width="500"
              height="488"
            />
          </div> */}
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img
              id="heroImg1"
              className="transition-all duration-300 object-contain ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src={
                feature.content.imagecontent
                  ? feature.content.imagecontent
                  : "https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
              }
              alt={feature.content.imagealt || "Dummy Image"}
              title={feature.content.imagetitle}
              width="500"
              height="488"
            />
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-purple-800">
            Key Benefits
          </h3>
          <ul className="list-disc list-inside mt-4 text-left text-gray-700">
            {feature.content.keyBenefits.map((benefit, index) => (
              <li key={index} className="mb-2 text-lg">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-purple-800">
            Why Choose This Feature?
          </h3>
          <p className="text-lg text-gray-600 mt-4">
            {feature.content.whyChoose}
          </p>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-purple-900">
        <div className="flex z-50 items-center justify-center py-20 relative">
          <div className="w-full mx-10 lg:justify-between relative z-20 lg:inline-flex lg:items-center lg:max-w-7xl">
            <div className="max-w-xl mb-4">
              <h3 className="text-white font-bold text-3xl sm:text-4xl tracking-tight">
                {" "}
                Learn more about our
                <span className="lg:block">
                  {" "}
                  Advanced School Management Software
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
              src={capobrain}
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

export default FeaturePage;
