import React, { useState, useEffect } from "react";
import client, { urlFor } from "../../sanityClient";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import twittercard from "../../img/twiiter-card.jpg";

const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [tab, setTab] = useState("top3"); // 'top3', 'top10', or 'top50'
  const [visibleSchools, setVisibleSchools] = useState(10); // For "Load More"

  useEffect(() => {
    const fetchSchools = async () => {
      const data = await client.fetch(`
        *[_type == "school"] | order(rank asc) {
          name,
          rank,
          "imageUrl": image.asset->url,
          description1,
          description2,
          detailsLink
        }
      `);
      setSchools(data);
    };
    fetchSchools();
  }, []);

  const filteredSchools = schools.filter((school) => {
    if (tab === "top3") return school.rank <= 3;
    if (tab === "top10") return school.rank <= 10;
    return school.rank <= 50;
  });

  const tabContent = {
    top3: {
      title:
        "Top 3 Schools in Gujranwala for Academic Excellence and Activities",
      description:
        "Explore the top three schools in Gujranwala that stand out for their exceptional academic achievements and commitment to holistic development. These schools offer a balanced approach, combining innovative teaching methods with diverse extracurricular activities to nurture well-rounded individuals. With modern facilities, experienced faculty, and a focus on quality education, these schools set a high standard for learning. They are the preferred choice for parents seeking excellence in both academics and personal growth for their children.",
    },
    top10: {
      title: "Top 10 Schools in Gujranwala Offering Exceptional Education",
      description:
        "Discover the ten leading schools in Gujranwala known for their dedication to academic excellence and student success. These institutions provide state-of-the-art facilities, a stimulating curriculum, and opportunities for extracurricular participation. With a focus on fostering creativity, leadership, and innovation, they empower students to achieve their potential. Recognized for their exceptional teaching standards and results, these schools ensure a comprehensive educational experience that prepares students for future challenges.",
    },
    top50: {
      title: "Top 50 Schools in Gujranwala: A Complete Guide to the Best",
      description:
        "Get a detailed overview of the top fifty schools in Gujranwala, offering a blend of academic excellence and personal development. These schools are recognized for their innovative curriculum, advanced infrastructure, and student-centric teaching approach. With a variety of programs and activities, they ensure holistic growth and foster lifelong learning. Whether you're looking for superior academics, extracurricular options, or a nurturing environment, this list provides an in-depth guide to help you make the best decision for your child's education.",
    },
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover the top-ranked schools in Gujranwala, evaluated by our comprehensive system. Find the best educational institutions to meet your needs."
        />
        <meta
          name="keywords"
          content="Top Schools in Gujranwala, Best Schools in Gujranwala, Gujranwala Schools Ranking, Academic Excellence, School Reviews, Education in Gujranwala"
        />
        <meta name="robots" content="index, follow" />
        <title>Top Schools in Gujranwala - Capobrain</title>
        <meta
          property="og:title"
          content="Top Schools in Gujranwala - Capobrain"
        />
        <meta
          property="og:description"
          content="Discover the top-ranked schools in Gujranwala, evaluated by our comprehensive system. Find the best educational institutions to meet your needs."
        />
        <meta property="og:image" content={twittercard} />
        <meta property="og:url" content="https://capobrain.com/top-schools-in-gujranwala/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Top Schools in Gujranwala - Capobrain"
        />
        <meta
          name="twitter:description"
          content="Discover the top-ranked schools in Gujranwala, evaluated by our comprehensive system. Find the best educational institutions to meet your needs."
        />
        <meta name="twitter:image" content={twittercard} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://capobrain.com/top-schools-in-gujranwala/" />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-5xl">
              Top Schools in Gujranwala
            </h1>
            <p className="max-w-2xl mx-auto text-gray-200">
              Discover the top-ranked schools in Gujranwala, evaluated by our
              comprehensive system. Find the best educational institutions to
              meet your needs.
            </p>
          </div>
        </div>
        <div
          className="absolute  inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
      <div className="p-8">
        {/* Tabs */}
        <div className="lg:cb-container py-6">
          <div className="lg:flex pb-2">
            <div className="flex flex-col mb-6 space-y-4 lg:w-1/4">
              <button
                className={`px-4 py-2 border ${
                  tab === "top3" ? "btn-anim text-white" : "bg-gray-100"
                }`}
                onClick={() => setTab("top3")}
              >
                Top 3 Schools
              </button>
              <button
                className={`px-4 py-2 border ${
                  tab === "top10" ? "btn-anim text-white" : "bg-gray-100"
                }`}
                onClick={() => setTab("top10")}
              >
                Top 10 Schools
              </button>
              <button
                className={`px-4 py-2 border ${
                  tab === "top50" ? "btn-anim text-white" : "bg-gray-100"
                }`}
                onClick={() => setTab("top50")}
              >
                Top 50 Schools
              </button>
            </div>
            <div className="lg:w-3/4 px-4">
              <h2 className="text-2xl font-bold mb-4">
                {tabContent[tab].title}
              </h2>
              <p className="text-gray-700 ">{tabContent[tab].description}</p>
            </div>
          </div>
          {/* School List */}
          <div className="block gap-4">
            {filteredSchools.slice(0, visibleSchools).map((school) => (
              <div key={school.rank} className="">
                <div className="grid lg:grid-cols-3 items-center gap-5 justify-between lg:p-4 pt-2">
                  <div className="space-y-2 lg:col-span-2">
                    <div className="flex items-start text-xl lg:text-2xl font-bold mb-2 space-x-2">
                      <span>{school.rank}.</span>{" "}
                      <h2 className="">{school.name}</h2>
                    </div>
                    <div className="px-1">
                      <p className="text-gray-600 mb-2">
                        {school.description1}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {school.description2}
                      </p>
                    </div>
                    <a
                      href={school.detailsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative items-center justify-start inline-block px-5 py-1.5 overflow-hidden font-medium transition-all btn-anim rounded-lg hover:bg-purple-50 group"
                    >
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-purple-50 rounded-lg"></span>
                      <span className="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-purple-600">
                        View Details
                      </span>
                    </a>
                  </div>
                  <div className="flex justify-center w-full">
                    <img
                      src={school.imageUrl}
                      alt={school.name}
                      title={school.name}
                      width={400}
                      height={400}
                      className="w-full rounded-lg h-auto object-contain mb-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {tab === "top50" && visibleSchools < filteredSchools.length && (
            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 btn-anim text-white rounded hover:bg-purple-600"
                onClick={() => setVisibleSchools((prev) => prev + 10)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Schools;
