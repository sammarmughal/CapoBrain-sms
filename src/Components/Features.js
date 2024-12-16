import React from "react";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <section className="pb-12 dark:bg-dark lg:pb-[90px] lg:pt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 max-w-[1200px] justify-center mx-auto">
          <FeaturesCard
            slug="cloud-based-school-management-system"
            title="Cloud-Based School Management System"
            details="Access Capobrain, your trusted school management
                              software, from anywhere with our secure and
                              reliable cloud-based system. Ensure your data is
                              always up-to-date and accessible for seamless
                              educational administration."
            icon={<i className="fa-solid fa-cloud fa-3x"></i>}
          />
          <FeaturesCard
            slug="cutting-edge-educational-technologies"
            title="Cutting-Edge Educational Technologies"
            details="Experience unparalleled performance with
                              Capobrain, utilizing the latest cutting-edge
                              technologies for school management. Our solutions
                              deliver a seamless and efficient experience for
                              students and educators alike."
            icon={<i className="fa-solid fa-memory fa-3x"></i>}
          />
          <FeaturesCard
            slug="computer-based-exam-management"
            title="Computer-Based Exam Management"
            details="Streamline your assessment process with
                              Capobrain's computer-based exam solutions. Our
                              software offers automated grading and instant
                              results, enhancing efficiency in school
                              assessments and reporting."
            icon={<i className="fa-solid fa-computer fa-3x"></i>}
          />
          <FeaturesCard
            slug="data-security"
            title="Data Security"
            details="Safeguard sensitive information with Capobrain's
                              robust protection measures. Ensure comprehensive
                              protection and privacy for all users within the
                              school management system."
            icon={<i className="fa-solid fa-file-shield fa-3x"></i>}
          />
          <FeaturesCard
            slug="students-and-parent-portals"
            title="Students & Parent Portals"
            details="Empower students and parents with Capobrain's
                              dedicated portals, providing easy access to
                              academic records, schedules, and essential
                              communication tools for enhanced engagement."
            icon={<i className="fas fa-users fa-3x"></i>}
          />
          <FeaturesCard
            slug="online-daily-diary-feature"
            title="Online Daily Diary Feature"
            details="Stay organized and informed with Capobrain's online daily diary feature, allowing students and teachers to record tasks, deadlines, and progress updates effortlessly."
            icon={<i className="far fa-calendar-alt fa-3x"></i>}
          />
          <FeaturesCard
            slug="ai-powered-reporting-analytics"
            title="AI-Powered Reporting and Analytics"
            details="Enhance decision-making and automate routine tasks
                                with Capobrain's AI-driven features. Gain
                                intelligent insights and personalized experiences
                                for effective school administration."
            icon={<i className="fas fa-robot fa-3x"></i>}
          />
          <FeaturesCard
            slug="school-management-mobile-app"
            title="School Management Mobile App"
            details="Stay connected on the go with Capobrain's mobile app support. Enable access to key features and updates anytime, anywhere, ensuring convenience for students and educators."
            icon={<i className="fa-solid fa-mobile-screen-button fa-3x"></i>}
          />
          <FeaturesCard
            slug="mobile-app-support"
            title="Mobile App Support"
            details="Effortlessly communicate with students, parents, and staff through CapoBrain's integrated Mobile App Support for Anytime Access feature, facilitating instant updates and announcements for enhanced school communication."
            icon={<i className="fa-brands fa-mobile-screen fa-3x"></i>}
          />
          <FeaturesCard
            slug="biometric-attendance"
            title="Biometric Attendance Management for Students & Staff"
            details="Ensure accurate and secure attendance tracking with CapoBrain's Biometric Attendance Management feature. Monitor students and staff efficiently, enhancing accountability and streamlining school operations."
            icon={<i className="fa-solid fa-clipboard-user fa-3x"></i>}
          />
          <FeaturesCard
            slug="fee-and-payment-management"
            title="Comprehensive Fee & Payment Management with Automated Reminders"
            details="Simplify your school's financial processes with CapoBrain's Fee & Payment Management system, featuring automated reminders, secure payment gateways, and customizable fee structures for seamless operations."
            icon={<i className="fas fa-money-check-alt fa-3x"></i>}
          />
          <FeaturesCard
            slug="inventory-management"
            title="Inventory and Resource Management for Academic Supplies"
            details="Effectively manage academic resources with CapoBrain’s Inventory Management system. Track supplies in real time, automate reorders, and ensure efficient resource allocation to meet institutional needs seamlessly."
            icon={<i className="fas fa-box-open fa-3x"></i>}
          />

          <FeaturesCard
            slug="student-and-staff-management-with-task-assignments"
            title="Student & Staff Management With Task Assignments"
            details="Efficiently manage and assign tasks to both students and staff with CapoBrain’s management feature. Streamline workflow, track progress, and ensure effective coordination across your school operations."
            icon={<i className="fas fa-tasks fa-3x"></i>}
          />

          <FeaturesCard
            slug="expense-and-financial-administration"
            title="Expense and Financial Administration"
            details="Gain control over your school's finances with CapoBrain's Expense and Financial Administration tools, offering detailed tracking of expenses and assets, advanced budgeting features, and actionable insights to streamline financial management."
            icon={<i className="fas fa-chart-pie fa-3x"></i>}
          />

          <FeaturesCard
            slug="streamlined-exam-grading-results-management"
            title="Streamlined Exam, Grading & Results Management"
            details="CapoBrain's streamlined exam, grading, and results management module ensures efficient exam scheduling, grading, and real-time results tracking for better academic performance management."
            icon={<i className="fas fa-clipboard-list fa-3x"></i>}
          />
          <FeaturesCard
            slug="reminders-for-fee-collection"
            title="Reminders For Fee Collection"
            details="Never miss a payment deadline with Capobrain's fee collection reminder feature, ensuring timely notifications for students and parents to stay on top of financial obligations."
            icon={<i className="far fa-bell fa-3x"></i>}
          />
          <FeaturesCard
            slug="comprehensive-reporting"
            title="Comprehensive Reporting"
            details="Gain valuable insights with CapoBrain's comprehensive reporting features, offering analytics and customizable reports for informed decision-making and enhanced school performance evaluation."
            icon={<i className="fas fa-chart-bar fa-3x"></i>}
          />
          <FeaturesCard
            slug="multi-campus-integration"
            title="Multi-Campus Integration For Unified Operations"
            details="Effortlessly manage multiple campuses with CapoBrain's integrated system, centralizing administration and coordination across all locations to ensure smooth educational governance."
            icon={<i className="fas fa-sitemap fa-3x"></i>}
          />

          <FeaturesCard
            slug="auto-paper-generation"
            title="Auto Paper Generation Aligned With Curriculum Standards"
            details="CapoBrain's Auto Paper Generation feature simplifies the creation of exams and assignments, ensuring alignment with curriculum standards while saving time for educators through automated and customizable tools."
            icon={<i className="far fa-file-alt fa-3x"></i>}
          />

          <FeaturesCard
            slug="school-website-management"
            title="School Website Management with Dynamic Features"
            details="Create a professional, dynamic online presence for your institution with CapoBrain’s customizable school website management feature, highlighting key information and engaging the community with interactive content."
            icon={<i className="fas fa-globe fa-3x"></i>}
          />
          <FeaturesCard
            slug="transport-management-system"
            title="Transport Management System with Route Optimization"
            details="Streamline school transportation with CapoBrain's Transport Management System. Optimize routes, track vehicles, and ensure safe, reliable transportation for students and staff."
            icon={<i className="fa-solid fa-bus fa-3x"></i>}
          />
          <FeaturesCard
            slug="real-time-notifications"
            title="Real-Time Notification and Instant Information Sharing"
            details="CapoBrain’s Real-Time Notification and Instant Information Sharing system ensures seamless communication with real-time updates, improving responsiveness and collaboration in educational environments."
            icon={<i className="fa-solid fa-bell fa-3x"></i>}
          />
          <FeaturesCard
            slug="admission-test-automation"
            title="Admission Test Automation and Integration"
            details="Simplify and automate your admission process with CapoBrain’s Admission Test Automation and Integration system. Easily manage test scheduling, scoring, and integration with student management systems to streamline your operations."
            icon={<i className="fas fa-clipboard-list fa-3x"></i>}
          />
          <FeaturesCard
            slug="time-table-and-scheduling-management-system"
            title="Time Table and Scheduling Management System"
            details="Streamline the management of class schedules with CapoBrain’s Time Table and Scheduling Management System. Automate the timetable creation process and ensure conflict-free schedules for students and staff."
            icon={<i className="fas fa-calendar-alt fa-3x"></i>}
          />
          <FeaturesCard
            slug="teacher-portal"
            title="Teacher Portal"
            details="Manage your classes, track student progress, and streamline communication with CapoBrain’s Teacher Portal, designed to enhance the educational experience for both teachers and students."
            icon={<i className="fas fa-chalkboard-teacher fa-3x"></i>}
          />
          <FeaturesCard
            slug="reception-management"
            title="Reception Management"
            details="Streamline visitor tracking, appointment scheduling, and front-desk operations with CapoBrain’s Reception Management system, designed to enhance efficiency and security."
            icon={<i className="fas fa-users-cog fa-3x"></i>}
          />
          <FeaturesCard
            slug="summer-task-resources-management"
            title="Summer Task & Resources Management"
            details="CapoBrain’s Summer Task & Resources Management system helps schools organize, track, and manage summer assignments, resources, and schedules for teachers and students."
            icon={<i className="fas fa-calendar fa-3x"></i>}
          />
        
           <FeaturesCard
            slug="parent-teacher-communication-portal"
            title="Parent Teacher Communication Portal"
            details="Improve collaboration between parents and teachers with real-time updates, easy messaging, and seamless resource sharing."
            icon={<i className="fa-solid fa-comments fa-3x"></i>}
          />
          <FeaturesCard
            slug="salary-advance-loan-management-system"
            title="Salary, Advance & Loan Management System"
            details="Easily manage salaries, advances, and loans with CapoBrain’s integrated system for efficient payroll and financial tracking."
            icon={<i className="fa-solid fa-money-bill fa-3x"></i>}
          />
          <FeaturesCard
            slug="certificates-id-card-generation-tool"
            title="Certificates & ID Card Generation Tool"
            details="Create customized certificates and ID cards easily with CapoBrain’s design tool, perfect for organizations of any size."
            icon={<i className="fa-solid fa-id-card fa-3x"></i>}
          />
          <FeaturesCard
            slug="comprehensive-library-management-with-digital-integration"
            title="Comprehensive Library Management With Digital Integration"
            details="Optimize your library's management with CapoBrain’s system. Enjoy seamless digital cataloging, book tracking, and improved user experience."
            icon={<i className="fa-solid fa-book fa-3x"></i>}
          />
          <FeaturesCard
            slug="integration-with-third-party-educational-tools-apis"
            title="Integration with Third-party Educational Tools & APIs"
            details="Expand your educational ecosystem with CapoBrain’s integration, connecting your system with third-party tools and APIs for enhanced functionality."
            icon={<i className="fa-solid fa-plug fa-3x"></i>}
          />
           <FeaturesCard
            slug="interactive-learning-guidelines"
            title="Interactive Learning Guidelines for Teacher & Student"
            details="Foster active participation and improve educational outcomes with CapoBrain’s Interactive Learning Guidelines, designed for both teachers and students."
            icon={<i className="fas fa-chalkboard-teacher fa-3x"></i>}
          />
          <FeaturesCard
            slug="role-based-access-control-for-secure-user-management"
            title="Role-Based Access Control For Secure User Management"
            details="Secure your platform with role-based access control, ensuring that users can only access authorized features and data."
            icon={<i className="fa-solid fa-user-shield fa-3x"></i>}
          />
          <FeaturesCard
            slug="seamless-integration-with-modern-educational-tools"
            title="Seamless Integration With Modern Educational Tools"
            details="Integrate top educational tools seamlessly to create a unified learning platform that enhances student engagement and success."
            icon={<i className="fa-solid fa-screwdriver-wrench fa-3x"></i>}
          />
          <FeaturesCard
            slug="sports-and-extra-curricular-activities-management"
            title="Sports & Extra Curricular Activities Management"
            details="Efficiently organize and track sports teams, clubs, and extra-curricular activities, ensuring better student participation and event management."
            icon={<i className="fa-solid fa-football-ball fa-3x"></i>}
          />
          <FeaturesCard
            slug="student-progress-performance-tracking"
            title="Student Progress Tracking & Performance Tracking Analytics"
            details="Monitor and analyze student progress effectively with CapoBrain’s Student Progress Tracking & Performance Analytics. Leverage data-driven insights to enhance student outcomes and performance tracking."
            icon={<i className="fas fa-chart-line fa-3x"></i>}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

const FeaturesCard = ({ icon, title, slug, details }) => {
  return (
    <>
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-700 transition-all duration-700 group-hover:scale-[14]"></span>

        <div className="relative z-10 mx-auto max-w-md">
          <span className="text-white grid h-20 w-20 place-items-center rounded-full bg-purple-700 transition-all duration-300 group-hover:bg-purple-500">
            {icon}
          </span>
          <div className="space-y-6 pt-5 text-2xl leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <h3 className="font-bold"> {title}</h3>
          </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>{details}</p>
          </div>

          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <Link
                to={`/features/${slug}`}
                className="text-purple-700 transition-all duration-300 group-hover:text-white"
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
