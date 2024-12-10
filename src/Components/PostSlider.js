import React from "react";
import Slider from 'react-slick';
import cloudComuting from "../img/Cloud-Based-School-Management-System.jpg";
import edge from "../img/Cutting-Edge-Educational-Technologies.jpg";
import computerBased from "../img/Computer-Based-Exam-Management.jpg";
import AiDriven from "../img/AI-Driven-Schoo- Management.jpg";
import DataSecurity from  "../img/Comprehensive-Data-Security.jpg";
import StudentParentsPortals from "../img/Students-&-Parent-Portals.jpg";
import studentstaff from "../img/Student-&-Staff-Ledgers.jpg";
import WhatsAppMessaging from "../img/WhatsApp-Messaging.jpg";
import DailyDiray from "../img/Online-Daily-Diary-Feature.jpg";
import MobileApp from "../img/School-Management-Mobile-App.jpg";
import BiometricAttendance from  "../img/Biometric-Attendance.jpg";
import SalaryFee from "../img/Salary-&-Fee-Management.jpg";
import InventoryManagement from "../img/Inventory-Management.jpg";
import RemainderFeeCollection from "../img/Reminders-For-Fee-Collection.jpg";
import SchoolCollegeWeb from "../img/School-&-College-Front-Website.jpg";
import OnlinePaperGeneration from "../img/Online-Paper-Generation.jpg";
import ExamResultManagement from "../img/Exams-&-Results-Management.jpg";
import ExpenseAndAssets from "../img/expense-and-assets.jpg";
import Reporting from "../img/comprehensive-reporting.jpg";
import MultiComputers from "../img/multi-computers.jpg";
import SchoolPng from "../img/School-Management-System.png"

const PostSlider = () => {
    const slider1 = {
        dots: false,
        infinite: true,
        speed: 15000,
        slidesToShow: 2.8,  
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
              slidesToShow: 1.5,
              slidesToScroll: 1,
            }
          }
        ]
      };
      const slider2 = {
        dots: false,
        infinite: true,
        speed: 15000,
        slidesToShow: 2.8,  
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
              slidesToShow: 1.5,
              slidesToScroll: 1.2,
            }
          }
        ]
      };
      const slider3 = {
        dots: false,
        infinite: true,
        speed: 15000,
        slidesToShow: 2.8,  
        slidesToScroll: .9,  
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
              slidesToShow: 1.5,
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
              src={cloudComuting}
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
              src={MultiComputers}
              alt="MultiComputers Student Information System"
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
        </Slider>
      </div>
    </div>
  );
};
export default PostSlider;
   
       