import React from "react";
import Slider from 'react-slick';
import SchoolPng from "../img/School-Management-System.png";
import SchoolCollegeWeb from "../img/slider/School-&-College-Front-Website.webp";
import cloudComputing from "../img/slider/Cloud-Based-School-Management-System.webp";
import ExamResultManagement from "../img/slider/Computer-Based-Exam-Management.webp"
import edge from "../img/slider/Cutting-Edge-Educational-Technologies.webp";
import computerBased from "../img/slider/Computer-Based-Exam-Management.webp";
import AiDriven from "../img/slider/AI-Driven-Schoo- Management.webp";
import DataSecurity from  "../img/slider/Comprehensive-Data-Security.webp";
import StudentParentsPortals from "../img/slider/Students-&-Parent-Portals.webp";
import studentstaff from "../img/slider/Student-&-Staff-Ledgers.webp";
import WhatsAppMessaging from "../img/slider/WhatsApp-Messaging.webp";
import DailyDiray from "../img/slider/Online-Daily-Diary-Feature.webp";
import MobileApp from "../img/slider/School-Management-Mobile-App.webp";
import BiometricAttendance from  "../img/slider/Biometric-Attendance.webp";
import SalaryFee from "../img/slider/Salary-&-Fee-Management.webp";
import InventoryManagement from "../img/slider/Inventory-Management.webp";
import RemainderFeeCollection from "../img/slider/Reminders-For-Fee-Collection.webp";
import OnlinePaperGeneration from "../img/slider/Online-Paper-Generation.webp";
import ExpenseAndAssets from "../img/slider/expense-and-assets.webp";
import Reporting from "../img/slider/comprehensive-reporting.webp";
import MultiCampus from "../img/slider/multi-campus.webp";
import AdmissionTestAutomation from "../img/slider/admission-test-automation.webp";
import AdvanceDynamic from "../img/slider/advanced-dynamic.webp";
import CertificateIdCard from "../img/slider/certificate-id-card.webp";
import ComprehensiveResources from "../img/slider/comprehensive-resources.webp";
import IntegrationThirdParty from "../img/slider/integration-with-third-party.webp";
import InteractiveLearningGuidelines from "../img/slider/interactive-learning-guidelines.webp";
import LearningManagementSystem from "../img/slider/learning-management-system.webp";
import ParentTeacher from "../img/slider/parent-teacher.webp";
import RealTimeNotification from "../img/slider/real-time-notifications.webp";
import Reception from "../img/slider/reception.webp";
import RoleBasedAccessControl from "../img/slider/role-base-access-control.webp";
import SeamlessIntegration from "../img/slider/seamless-integration.webp";
import SportsExtraCurricular from "../img/slider/sports-extra-curricular.webp";
import StudentProgressTracking from "../img/slider/student-progress-tracking.webp";
import SummerTaskResources from "../img/slider/summer-task-and-resources.webp";
import Teachers from "../img/slider/teachers.webp";
import TimetableSheduling from "../img/slider/timetable-scheduling.webp";
import TransportManagementSystem from "../img/slider/transport-management-system.webp";
import salaryLoan from "../img/slider/salary-loan.webp";
import BasicReporting from "../img/slider/basic-reporting.webp";
import StreamlineExamGrading from "../img/slider/streamline-exam-grading.webp";

const PostSlider = () => {
    const slider1 = {
        dots: false,
        infinite: true,
        speed: 15000,
        slidesToShow: 3.2,  
        slidesToScroll: 1,  
        autoplay: true,        
        autoplaySpeed: 0, 
        cssEase: "linear",
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.8,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1.5,
            }
          }
        ]
      };
      const slider2 = {
        dots: false,
        infinite: true,
        speed: 15000,
        slidesToShow: 3.2,  
        slidesToScroll: .8,  
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: "linear",
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.8,
              slidesToScroll: 1.3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1.3,
            }
          }
        ]
      };
      const slider3 = {
        dots: false,
        infinite: true,
        speed: 15000,
        slidesToShow: 3.2,  
        slidesToScroll: 1.1,  
        autoplay: true,        
        autoplaySpeed: 0, 
        cssEase: "linear",
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.8,
              slidesToScroll: 1.1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1.1,
            }
          }
        ]
      };
   
  return (
    <div className="w-full pt-4 pb-2 sm:pb-8" id="faq">
      <div className="flex px-4 flex-wrap">
        <div className="cb-container flex min-h-fit">
          <div className="w-full lg:w-4/6 mb-6 lg:mb-12 min-h-fit">
            <div className="pb-markdown min-h-fit font-grotesk-medium font-verdana-fallback text-sm font-sami-bold tracking-wide leading-5 uppercase text-purple-800">
              <p>Growth Across All Dimensions</p>
            </div>
            <div className="pb-markdown min-h-fit pt-4 lg:py-5">
              <h3 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl">
              Best Software ERP Solution with 30+ Modules to Enhance Your Institution's Efficiency </h3>
            </div>
            <div className="pb-markdown min-h-fit mv-type--body text-cool-grey-600 hidden lg:block">
              <p>
              Transform your educational experience with our comprehensive educational management software solutions, designed to enhance communication, streamline processes, and empower administrators, teachers, and students across diverse institutions.
              </p>
            </div>
          </div>
          <div className="w-2/6 hidden lg:flex items-center justify-center">
          <img
            className="w-full p-3 h-auto object-cover"
            src={SchoolPng}
            loading="lazy"
            alt="School Software Modeules"
            title="School Software Solutions in Pakistan"
          />
          </div>
        </div>
      </div>
      <div className="verticel-carousel">
        <Slider {...slider1}>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={cloudComputing}
              loading="lazy"
              alt="Cloud Computing School Management System"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={edge}
              loading="lazy"
              alt="Cutting-edge School Management Software"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={computerBased}
              loading="lazy"
              alt="Computer Based School Management Software"
              width="512"
              height="230"
              title="Computer Based Best School Management System"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={AiDriven}
              loading="lazy"
              alt="AI Driven School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={DataSecurity}
              loading="lazy"
              alt="Data Security School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={studentstaff}
              loading="lazy"
              alt="Student and Staffs Ledgers"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={StudentParentsPortals}
              loading="lazy"
              alt="Students & Parents Portals School Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={AdmissionTestAutomation}
              loading="lazy"
              alt="Admission Test Automation & Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={AdvanceDynamic}
              loading="lazy"
              alt="Advanced Dynamic Website Features"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={CertificateIdCard}
              loading="lazy"
              alt="Certificates & ID Card Generation Tool"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={ComprehensiveResources}
              loading="lazy"
              alt="Comprehensive Library Management with Digital Integration"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={IntegrationThirdParty}
              loading="lazy"
              alt="Integration with Third-Party Educational Tools & APIs"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={InteractiveLearningGuidelines}
              loading="lazy"
              alt="Interactive Learning Guidelines for Teachers and Students"
              width="512"
              height="230"
            />
          </div>  
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={salaryLoan}
              loading="lazy"
              alt="Salary, Advance and Loan Managemnet For Staff"
              width="512"
              height="230"
            />
          </div>       
        
        </Slider>
      </div>
      <div className="verticel-carousel mt-1 sm:mt-4 md:mt-10">
        <Slider {...slider2}>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={DailyDiray}
              loading="lazy"
              alt="Online Daily Diary School Management Software"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={MobileApp}
              loading="lazy"
              alt="School Management Mobile App"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={WhatsAppMessaging}
              loading="lazy"
              alt="School Software WhatsApp Messaging"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={BiometricAttendance}
              loading="lazy"
              alt="School Biometric Attendance Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={SalaryFee}
              loading="lazy"
              alt="Salary & Fee Management System"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={InventoryManagement}
              loading="lazy"
              alt="School Inventory Management System"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={LearningManagementSystem}
              loading="lazy"
              alt="Learning Management System (LMS) for E-Learning & Blended Education"
              width="512"
              height="230"
              title="Learning ERP"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={ParentTeacher}
              loading="lazy"
              alt="Parent-Teacher Communication Portal"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={RealTimeNotification}
              loading="lazy"
              alt="Real-Time Notifications and Instant Information Sharing"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={Reception}
              loading="lazy"
              alt="Reception Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={RoleBasedAccessControl}
              loading="lazy"
              alt="Role-Based Access Control for Secure User Management"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={SeamlessIntegration}
              loading="lazy"
              alt="Seamless Integration with Modern Educational Tools"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={BasicReporting}
              loading="lazy"
              alt="Basic Reporting System"
              width="512"
              height="230"
            />
          </div>
        
        </Slider>
      </div>
      <div className="verticel-carousel mt-1 sm:mt-4 md:mt-10">
        <Slider {...slider3}>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={RemainderFeeCollection}
              loading="lazy"
              alt="Remainder Fee Collection School Management System"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={Reporting}
              loading="lazy"
              alt="Reportion School Management"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={ExpenseAndAssets}
              loading="lazy"
              alt="Expense and Assets School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={OnlinePaperGeneration}
              loading="lazy"
              alt="Online Paper Generation School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={ExamResultManagement}
              loading="lazy"
              alt="Exam & Result School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={MultiCampus}
              loading="lazy"
              alt="MultiCampus Student Information System"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={SchoolCollegeWeb}
              loading="lazy"
              alt="School & College Webs Portal"
              width="512"
              height="230"
              title="School ERP Software Solution in Pakistan"
            />
          </div>  
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={SportsExtraCurricular}
              loading="lazy"
              alt="Sports & Extracurricular Activities Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={StudentProgressTracking}
              loading="lazy"
              alt="Student Progress Tracking & Performance Analytics"
              width="512"
              height="230"
            />
          </div>       
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={SummerTaskResources}
              loading="lazy"
              alt="Summer Tasks & Resource Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={Teachers}
              loading="lazy"
              alt="Teachers’ Portal"
              width="512"
              height="230"
            />
          </div>       
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={TimetableSheduling}
              loading="lazy"
              alt="Timetable & Scheduling Management System"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={TransportManagementSystem}
              loading="lazy"
              alt="Transport Management System with Route Optimization"
              width="512"
              height="230"
            />
          </div>    
          <div className="px-4">
            <img
              className="img-fluid rounded-xl sm:rounded-2xl carousel-image"
              src={StreamlineExamGrading}
              loading="lazy"
              alt="Streamline Exam, Grading & Result Management"
              width="512"
              height="230"
            />
          </div>             
        </Slider>
      </div>
    </div>
  );
};
export default PostSlider;
   
       