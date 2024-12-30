import React, { useState, useContext } from "react";
import Blog2 from "../../img/blog/blog2.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MyContext from "../../ContextApi/MyContext";
import twittercard from "../../img/twiiter-card.jpg";

const Blog = () => {
  const { filterPosts, posts, uniqueCategory, setCategory } =
    useContext(MyContext);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };    
    const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts; 
   
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Read the latest insights and updates from Capobrain’s blog. Stay informed about school management, ERP software, education technology..."
        />
        <meta
          name="keywords"
          content="Capobrain Blog, School Management Blog, School ERP Blog, Education Technology, School Software Insights, School Management Best Practices, ERP Software Updates, School Administration Tips"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Blog - Insights on School Management Software
        </title>
        <meta
          property="og:title"
          content="Blog - Capobrain | Insights on School Management and ERP Software"
        />
        <meta
          property="og:description"
          content="Explore Capobrain's blog for the latest articles on school management, ERP software, and education technology. Learn valuable tips and insights to optimize your use of our School Management System."
        />
        <meta property="og:image" content={twittercard} />
        <meta property="og:url" content="https://capobrain.com/blog/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Blog - Capobrain | Insights on School Management and ERP Software"
        />
        <meta
          name="twitter:description"
          content="Capobrain’s blog provides valuable insights into school management, ERP software, and education technology. Stay up to date with the latest trends and tips for better school administration."
        />
        <meta name="twitter:image" content={twittercard} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://capobrain.com/blog/"/>
       
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-5xl">
              CapoBrain Blog: Expert Insights on
              <br />
              School Management Software{" "}
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
      <section className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <h2 className="heading-body">Explore Our Blog</h2>
            <h3 className="text-neutral-500 text-justify sm:text-center">
              {" "}
              Welcome to the CapoBrain blog! Discover articles, tips, and
              insights on School Management Software, SIS, and Education ERP
              Solutions. From expert advice on software implementation to
              education tech trends in Pakistan, our blog covers it all.
            </h3>
          </div>
          <ul className="flex flex-wrap gap-4 text-center justify-center">
            {posts &&
              [...uniqueCategory].map((category) => {
                const isActive = category === selectedCategory;

                return (
                  <li
                    key={category} 
                    className={`cursor-pointer px-4 py-2 rounded-full ${
                      isActive
                        ? "btn-anim text-white" 
                        : "bg-gray-200 text-gray-800" 
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    >
                    {category}
                  </li>
                );
              })}            
          </ul>
          <div className="grid grid-cols-1 mx-auto gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">           
            {filteredPosts.map((post) => {
              return (
                <article className="flex flex-col">
                  <Link style={{ textDecoration: "none" }} to={`/blog/${post.slug}`}>
                    <img
                      alt="Blog Image"
                      className="object-cover w-full h-52"
                      src={Blog2}
                    />
                    <div className="flex flex-col flex-1 px-2 py-4">                      
                        {post.category}
                      <p className="flex-1 py-2 text-lg font-semibold leading-snug">
                        {post.title.length > 50
                              ? post.title.slice(0, 50) + "..."
                              : post.title}
                      </p>
                      <div className="flex justify-between pt-3 space-x-2 text-xs">
                        <span>{post.date}</span>
                        <span>2.8K views</span>
                      </div>
                    </div>                   
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
