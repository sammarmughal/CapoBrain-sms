import React, { useState } from "react";
import Blog1 from "../img/blog/blog1.png";
import Blog2 from "../img/blog/blog2.png";
import Blog3 from "../img/blog/blog3.png";
import Blog4 from "../img/blog/blog4.png";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Education Software");

  const blogCategories = [
    {
      name: "Education Software",
      blogs: [
        {
          title: "School Management Software Benefits",
          date: "June 1, 2020",
          views: "2.1K views",
          image: Blog1,
        },
        {
          title: "How to Choose the Best School Management System",
          date: "June 5, 2020",
          views: "1.5K views",
          image: Blog2,
        },
      ],
    },
    {
      name: "Education Management",
      blogs: [
        {
          title: "Top Features of a Student Information System",
          date: "July 2, 2020",
          views: "3K views",
          image: Blog3,
        },
        {
          title: "Why SIS is Essential for Schools",
          date: "July 10, 2020",
          views: "2.8K views",
          image: Blog4,
        },
      ],
    },
    {
      name: "EdTech Solution Suite",
      blogs: [
        {
          title: "Top Features of a Student Information System",
          date: "July 2, 2020",
          views: "3K views",
          image: Blog3,
        },
        {
          title: "Why SIS is Essential for Schools",
          date: "July 10, 2020",
          views: "2.8K views",
          image: Blog4,
        },
      ],
    },
    {
      name: "Technology",
      blogs: [
        {
          title: "Top Features of a Student Information System",
          date: "July 2, 2020",
          views: "3K views",
          image: Blog3,
        },
        {
          title: "Why SIS is Essential for Schools",
          date: "July 10, 2020",
          views: "2.8K views",
          image: Blog4,
        },
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Read the latest insights and updates from Capobrain’s blog. Stay informed about school management, ERP software, education technology, and best practices for school administrators. Learn how to make the most of our School Management System and ERP solutions."
        />
        <meta
          name="keywords"
          content="Capobrain Blog, School Management Blog, School ERP Blog, Education Technology, School Software Insights, School Management Best Practices, ERP Software Updates, School Administration Tips"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Blog - Capobrain | Insights on School Management and ERP Software
        </title>
        <meta
          property="og:title"
          content="Blog - Capobrain | Insights on School Management and ERP Software"
        />
        <meta
          property="og:description"
          content="Explore Capobrain's blog for the latest articles on school management, ERP software, and education technology. Learn valuable tips and insights to optimize your use of our School Management System."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_BLOG_PAGE_URL" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Blog - Capobrain | Insights on School Management and ERP Software"
        />
        <meta
          name="twitter:description"
          content="Capobrain’s blog provides valuable insights into school management, ERP software, and education technology. Stay up to date with the latest trends and tips for better school administration."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-5xl">
              CapoBrain Blog: Expert Insights on
              <br />
              School Management Software{" "}
            </h1>
            <p className="max-w-2xl mx-auto text-gray-200"></p>
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

      <section className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <h2 className="heading-body">Explore Our Blog</h2>
            <p className="">
              {" "}
              Welcome to the CapoBrain blog! Discover articles, tips, and
              insights on School Management Software, SIS, and Education ERP
              Solutions. From expert advice on software implementation to
              education tech trends in Pakistan, our blog covers it all.
            </p>
          </div>
          {/* Category Buttons */}
          <ul className="flex flex-wrap gap-4 text-center justify-center">
            {blogCategories.map((category) => (
              <li
                key={category.name}
                className={`cursor-pointer px-4 py-2 rounded-full ${
                  activeCategory === category.name
                    ? "btn-anim text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
          {/* Blog Cards for Active Category */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogCategories
              .find((category) => category.name === activeCategory)
              ?.blogs.map((blog, index) => (
                <article key={index} className="flex flex-col">
                  <a href="#" aria-label={blog.title}>
                    <img
                      alt={blog.title}
                      className="object-cover w-full h-52"
                      src={blog.image}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      href="#"
                      className="text-xs tracking-wider uppercase hover:underline"
                    >
                      {activeCategory}
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      {blog.title}
                    </h3>
                    <div className="flex justify-between pt-3 space-x-2 text-xs">
                      <span>{blog.date}</span>
                      <span>{blog.views}</span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
