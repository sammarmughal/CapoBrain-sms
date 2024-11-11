import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import featurePagesData from "../data/featurePagesData.json";
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
    </div>
  );
}

export default FeaturePage;
