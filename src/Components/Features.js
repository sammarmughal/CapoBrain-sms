import React from "react";
import { Link } from "react-router-dom";
const Features = () => {

  return (
    <section className="pb-12 dark:bg-dark lg:pb-[90px] lg:pt-10">
      <div className="container mx-auto">

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
            <FeaturesCard
            title="Online Daily Diary Feature"
            details="Stay organized and informed with Capobrain's online daily diary feature, allowing students and teachers to record tasks, deadlines, and progress updates effortlessly."
            icon={
                <i className="far fa-calendar-alt fa-3x"></i>
            }
          />
          <FeaturesCard
            title="School Management Mobile App"
            details="Stay connected on the go with Capobrain's mobile app support. Enable access to key features and updates anytime, anywhere, ensuring convenience for students and educators."
            icon={
                <i className="fa-solid fa-mobile-screen-button fa-3x"></i>
            }
          />
          <FeaturesCard
            title="WhatsApp Messaging"
            details="Effortlessly communicate with students, parents, and staff through CapoBrain's integrated WhatsApp messaging feature, facilitating instant updates and announcements for enhanced school communication."
            icon={
                <i className="fa-brands fa-whatsapp fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Biometric Attendance"
            details="Ensure accurate attendance tracking with CapoBrain's biometric attendance feature, providing a secure and efficient method for monitoring student and staff presence, enhancing accountability in your school."
            icon={
                <i className="fa-solid fa-clipboard-user fa-3x"></i>
            }
          />
           <FeaturesCard
            title="Salary & Fee Management"
            details="Efficiently manage salaries and fees with CapoBrain's integrated salary and fee management system, simplifying payroll processing and financial transactions for staff and students, streamlining financial operations in your institution."
            icon={
                <i className="fas fa-money-check-alt fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Inventory Management"
            details="Keep track of resources seamlessly with CapoBrain's inventory management feature, enabling efficient monitoring and replenishment of school supplies and equipment, ensuring your institution is always well-stocked."
            icon={
                <i className="fas fa-box-open fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Student & Staff Ledgers"
            details="Maintain comprehensive financial records for students and staff with CapoBrain's ledger management feature, ensuring transparency and accuracy in accounting processes for effective financial oversight."
            icon={
                <i className="fas fa-file-invoice-dollar fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Reminders For Fee Collection"
            details="Never miss a payment deadline with Capobrain's fee collection reminder feature, ensuring timely notifications for students and parents to stay on top of financial obligations."
            icon={
                <i className="far fa-bell fa-3x"></i>
            }
          />
           <FeaturesCard
            title="Expense & Assets Management"
            details="Efficiently track expenses and manage assets with CapoBrain's comprehensive management tools, providing insights and control over financial resources for optimized school operations and budgeting."
            icon={
                <i className="fas fa-chart-pie fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Online Paper Generation"
            details="Generate exams and assignments effortlessly with CapoBrain's online paper generation feature, enabling teachers to create, customize, and distribute digital assessments with ease for enhanced academic efficiency."
            icon={
                <i className="far fa-file-alt fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Exams & Results Management"
            details="Streamline the examination process and manage results effectively with CapoBrain's comprehensive exams and results management module, ensuring smooth administration and timely reporting for academic success."
            icon={
                <i className="fas fa-clipboard-list fa-3x"></i>
            }
          />
          <FeaturesCard
            title="Comprehensive Reporting"
            details="Gain valuable insights with CapoBrain's comprehensive reporting features, offering analytics and customizable reports for informed decision-making and enhanced school performance evaluation."
            icon={
                <i className="fas fa-chart-bar fa-3x"></i>
            }
          />
            <FeaturesCard
            title="Multi Campuses Management"
            details="Effortlessly manage multiple branches or campuses with CapoBrain's integrated system, enabling centralized administration and coordination across diverse locations for seamless educational governance."
            icon={
                <i className="fas fa-sitemap fa-3x"></i>
            }
          />
          <FeaturesCard
            title="School/ College Front Website"
            details="Showcase your school or college with CapoBrain's customizable front website feature, highlighting important information, events, and achievements for a professional online presence that engages your community."
            icon={
                <i className="fas fa-globe fa-3x"></i>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

const FeaturesCard = ({ icon, title, details }) => {
  const createSlug = (title) => title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  const slug = createSlug(title);

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
            <Link
              to={`/features/${slug}`}
              className="text-violet-500 transition-all duration-300 group-hover:text-white"
            >
              Read the docs &rarr;
            </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
