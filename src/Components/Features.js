import React from "react";

const Features = () => {
  return (
    <section className="pb-12 dark:bg-dark lg:pb-[90px] lg:pt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[710px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl">
              Key Features of Capobrain's School Management System{" "}
              </h2>
              <p className="text-xl text-body-color">
              Over 20+ Modules you <i className="fa fa-heart heart heartcolor text-red-600"></i>{" "}
              to use CapoBrain              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 max-w-[1200px] justify-center mx-auto">
          <FeaturesCard
            title="Cloud-Based School Management System"
            details="Access Capobrain, your trusted school management
                              software, from anywhere with our secure and
                              reliable cloud-based system. Ensure your data is
                              always up-to-date and accessible for seamless
                              educational administration."
            icon={<i className="fa-solid fa-cloud fa-3x"></i>}
          />
          <FeaturesCard
            title="Cutting-Edge Educational Technologies"
            details="Experience unparalleled performance with
                              Capobrain, utilizing the latest cutting-edge
                              technologies for school management. Our solutions
                              deliver a seamless and efficient experience for
                              students and educators alike."
            icon={
                <i className="fa-solid fa-memory fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Computer-Based Exam Management"
            details="Streamline your assessment process with
                              Capobrain's computer-based exam solutions. Our
                              software offers automated grading and instant
                              results, enhancing efficiency in school
                              assessments and reporting."
            icon={
                <i className="fa-solid fa-computer fa-3x"></i>
            }
          />
          <FeaturesCard
            title="AI-Driven School Management"
            details="Enhance decision-making and automate routine tasks
                                with Capobrain's AI-driven features. Gain
                                intelligent insights and personalized experiences
                                for effective school administration."
            icon={
                <i className="fas fa-robot fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Data Security"
            details="Safeguard sensitive information with Capobrain's
                              robust protection measures. Ensure comprehensive
                              protection and privacy for all users within the
                              school management system."
            icon={
                <i className="fa-solid fa-file-shield fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Students & Parent Portals"
            details="Empower students and parents with Capobrain's
                              dedicated portals, providing easy access to
                              academic records, schedules, and essential
                              communication tools for enhanced engagement."
            icon={
                <i className="fas fa-users fa-3x"></i>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

const FeaturesCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-violet-500 transition-all duration-700 group-hover:scale-[14]"></span>

        <div className="relative z-10 mx-auto max-w-md">
          <span className="text-white grid h-20 w-20 place-items-center rounded-full bg-violet-500 transition-all duration-300 group-hover:bg-violet-400">
            {icon}
          </span>
          <div className="space-y-6 pt-5 text-2xl leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <h1 className="font-bold"> {title}</h1>
          </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>{details}</p>
          </div>

          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
                href="#"
                className="text-violet-500 transition-all duration-300 group-hover:text-white"
              >
                Read the docs &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
