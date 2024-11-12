import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import featurePagesData from "../data/featurePagesData.json";
import capobrain from "../img/Capobrainheader.png";
function FeaturePage() {
  const { slug } = useParams();
  const feature = featurePagesData.features.find((f) => f.slug === slug);

  if (!feature) {
    return (
      <>
        <section className="relative bg-purple-900">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 max-w-8xl mx-auto text-center">
              <h1
                className="text-4xl lg:text-6xl font-[1000] text-white"
                style={{ fontFamily: "Grotesk-Medium, Verdana, sans-serif" }}
              >
                Feature not found
              </h1>
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
    <div className="container mx-auto">
      <Helmet>
        <title>{feature.meta.title}</title>
        <meta name="description" content={feature.meta.description} />
      </Helmet>

      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1
              className="text-4xl lg:text-6xl font-[1000] text-white"
              style={{ fontFamily: "Grotesk-Medium, Verdana, sans-serif" }}
            >
              {feature.content.heroHeader}
            </h1>
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
      <div className="cb-container">
        <section className="pt-20 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-800">
            {feature.content.heading}
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            {feature.content.description}
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-800">
            Key Benefits
          </h3>
          <ul className="list-disc list-inside mt-4 text-left text-gray-700">
            {feature.content.keyBenefits.map((benefit, index) => (
              <li key={index} className="mb-2">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-20">
          <h3 className="text-2xl font-semibold text-indigo-800">
            Why Choose This Feature?
          </h3>
          <p className="text-lg text-gray-600 mt-4">
            {feature.content.whyChoose}
          </p>
        </section>
      </div>
      <div className="relative isolate overflow-hidden bg-purple-900">
        <div className="flex z-50 items-center justify-center py-20 relative">
          <div className="w-full justify-between relative z-20 lg:inline-flex lg:items-center lg:max-w-7xl">
            <div className="max-w-xl">
                <h3 className="text-white font-extrabold text-4xl tracking-tight">  Learn more about our 
                    <span className="lg:block"> Advanced School Management Software</span>
                </h3>
            </div>
            <div className="flex flex-col lg:ml-auto sm:flex-row "><Link
                    className="base-button min-h-fit mx-0 btn-a btn-b bg-white text-[#7a12d4]"
                    to="/requestdemo"> Get in touch with us →&nbsp;&nbsp;
                   
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
              alt=""
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
   
      </div>
    </div>
    
  );
}

export default FeaturePage;
