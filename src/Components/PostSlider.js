import React from "react";
import Slider from 'react-slick';
import SchoolPng from "../img/School-Management-System.png";
import SchoolCollegeWeb from "../img/slider/School-&-College-Front-Website.jpg";
import cloudComputing from "../img/slider/Cloud-Based-School-Management-System.jpg";
import ExamResultManagement from "../img/slider/Computer-Based-Exam-Management.jpg"
import edge from "../img/slider/Cutting-Edge-Educational-Technologies.jpg";
import computerBased from "../img/slider/Computer-Based-Exam-Management.jpg";
import AiDriven from "../img/slider/AI-Driven-Schoo- Management.jpg";
import DataSecurity from  "../img/slider/Comprehensive-Data-Security.jpg";
import StudentParentsPortals from "../img/slider/Students-&-Parent-Portals.jpg";
import studentstaff from "../img/slider/Student-&-Staff-Ledgers.jpg";
import WhatsAppMessaging from "../img/slider/WhatsApp-Messaging.jpg";
import DailyDiray from "../img/slider/Online-Daily-Diary-Feature.jpg";
import MobileApp from "../img/slider/School-Management-Mobile-App.jpg";
import BiometricAttendance from  "../img/slider/Biometric-Attendance.jpg";
import SalaryFee from "../img/slider/Salary-&-Fee-Management.jpg";
import InventoryManagement from "../img/slider/Inventory-Management.jpg";
import RemainderFeeCollection from "../img/slider/Reminders-For-Fee-Collection.jpg";
import OnlinePaperGeneration from "../img/slider/Online-Paper-Generation.jpg";
import ExpenseAndAssets from "../img/slider/expense-and-assets.jpg";
import Reporting from "../img/slider/comprehensive-reporting.jpg";
import MultiCampus from "../img/slider/multi-campus.jpg";
import AdmissionTestAutomation from "../img/slider/admission-test-automation.jpg";
import AdvanceDynamic from "../img/slider/advanced-dynamic.jpg";
import CertificateIdCard from "../img/slider/certificate-id-card.jpg";
import ComprehensiveResources from "../img/slider/comprehensive-resources.jpg";
import IntegrationThirdParty from "../img/slider/integration-with-third-party.jpg";
import InteractiveLearningGuidelines from "../img/slider/interactive-learning-guidelines.jpg";
import LearningManagementSystem from "../img/slider/learning-management-system.jpg";
import ParentTeacher from "../img/slider/parent-teacher.jpg";
import RealTimeNotification from "../img/slider/real-time-notifications.jpg";
import Reception from "../img/slider/reception.jpg";
import RoleBasedAccessControl from "../img/slider/role-base-access-control.jpg";
import SeamlessIntegration from "../img/slider/seamless-integration.jpg";
import SportsExtraCurricular from "../img/slider/sports-extra-curricular.jpg";
import StudentProgressTracking from "../img/slider/student-progress-tracking.jpg";
import SummerTaskResources from "../img/slider/summer-task-and-resources.jpg";
import Teachers from "../img/slider/teachers.jpg";
import TimetableSheduling from "../img/slider/timetable-scheduling.jpg";
import TransportManagementSystem from "../img/slider/transport-management-system.jpg";
import salaryLoan from "../img/slider/salary-loan.jpg";
import BasicReporting from "../img/slider/basic-reporting.jpg";
import StreamlineExamGrading from "../img/slider/streamline-exam-grading.jpg";

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
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1,
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
              slidesToShow: 3,
              slidesToScroll: 1.3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1.2,
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
              slidesToShow: 3,
              slidesToScroll: 1.1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1.1,
            }
          }
        ]
      };
   
  return (
    <div className="w-full pt-10 pb-8" id="faq">
      <div className="flex px-4 flex-wrap">
        <div className="cb-container flex min-h-fit">
          <div className="w-full lg:w-4/6 mb-6 lg:mb-12 min-h-fit">
            <div className="pb-markdown min-h-fit font-grotesk-medium font-verdana-fallback text-sm font-sami-bold tracking-wide leading-5 uppercase text-purple-800">
              <p>Growth Across All Dimensions</p>
            </div>
            <div className="pb-markdown min-h-fit pt-4 lg:py-5">
              <h3 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl">
              Best School Management Software with 30+ Modules to Enhance Your Institution's Efficiency </h3>
            </div>
            <div className="pb-markdown min-h-fit mv-type--body text-cool-grey-600 hidden lg:block">
              <p>
              Transform your educational experience with our comprehensive school management software solutions, designed to enhance communication, streamline processes, and empower administrators, teachers, and students across diverse institutions.
              </p>
            </div>
          </div>
          <div className="w-2/6 hidden lg:flex items-center justify-center">
          <img
            className="w-full p-3 h-auto object-cover"
            src={SchoolPng}
            alt="School Software Modeules"
          />
          </div>
        </div>
      </div>
      <div className="verticel-carousel">
        <Slider {...slider1}>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={cloudComputing}
              alt="Cloud Computing School Management System"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={edge}
              alt="Cutting-edge School Management Software"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={computerBased}
              alt="Computer Based School Management Software"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={AiDriven}
              alt="AI Driven School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={DataSecurity}
              alt="Data Security School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={studentstaff}
              alt="Student and Staffs Ledgers"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={StudentParentsPortals}
              alt="Students & Parents Portals School Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={AdmissionTestAutomation}
              alt="Admission Test Automation & Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={AdvanceDynamic}
              alt="Advanced Dynamic Website Features"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={CertificateIdCard}
              alt="Certificates & ID Card Generation Tool"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={ComprehensiveResources}
              alt="Comprehensive Library Management with Digital Integration"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={IntegrationThirdParty}
              alt="Integration with Third-Party Educational Tools & APIs"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={InteractiveLearningGuidelines}
              alt="Interactive Learning Guidelines for Teachers and Students"
              width="512"
              height="230"
            />
          </div>  
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={salaryLoan}
              alt="Salary, Advance and Loan Managemnet For Staff"
              width="512"
              height="230"
            />
          </div>       
        
        </Slider>
      </div>
      <div className="verticel-carousel mt-4 md:mt-10">
        <Slider {...slider2}>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={DailyDiray}
              alt="Online Daily Diary School Management Software"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={MobileApp}
              alt="School Management Mobile App"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={WhatsAppMessaging}
              alt="School Software WhatsApp Messaging"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={BiometricAttendance}
              alt="School Biometric Attendance Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={SalaryFee}
              alt="Salary & Fee Management System"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={InventoryManagement}
              alt="School Inventory Management System"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={LearningManagementSystem}
              alt="Learning Management System (LMS) for E-Learning & Blended Education"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={ParentTeacher}
              alt="Parent-Teacher Communication Portal"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={RealTimeNotification}
              alt="Real-Time Notifications and Instant Information Sharing"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={Reception}
              alt="Reception Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={RoleBasedAccessControl}
              alt="Role-Based Access Control for Secure User Management"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={SeamlessIntegration}
              alt="Seamless Integration with Modern Educational Tools"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={BasicReporting}
              alt="Basic Reporting System"
              width="512"
              height="230"
            />
          </div>
        
        </Slider>
      </div>
      <div className="verticel-carousel mt-4 md:mt-10">
        <Slider {...slider3}>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={RemainderFeeCollection}
              alt="Remainder Fee Collection School Management System"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={Reporting}
              alt="Reportion School Management"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={ExpenseAndAssets}
              alt="Expense and Assets School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={OnlinePaperGeneration}
              alt="Online Paper Generation School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={ExamResultManagement}
              alt="Exam & Result School Management Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={MultiCampus}
              alt="MultiCampus Student Information System"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={SchoolCollegeWeb}
              alt="School & College Webs Portal"
              width="512"
              height="230"
            />
          </div>  
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={SportsExtraCurricular}
              alt="Sports & Extracurricular Activities Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={StudentProgressTracking}
              alt="Student Progress Tracking & Performance Analytics"
              width="512"
              height="230"
            />
          </div>       
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={SummerTaskResources}
              alt="Summer Tasks & Resource Management"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={Teachers}
              alt="Teachers’ Portal"
              width="512"
              height="230"
            />
          </div>       
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={TimetableSheduling}
              alt="Timetable & Scheduling Management System"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={TransportManagementSystem}
              alt="Transport Management System with Route Optimization"
              width="512"
              height="230"
            />
          </div>    
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={StreamlineExamGrading}
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
   
       