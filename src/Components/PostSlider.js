import React from "react";
import Slider from 'react-slick';
import cloudComuting from "../img/Cloud-Based-School-Management-System.png";
import edge from "../img/Cutting-Edge-Educational-Technologies.png";
import computerBased from "../img/Computer-Based-Exam-Management.png";
import AiDriven from "../img/AI-Driven-Schoo- Management.png";
import DataSecurity from  "../img/Comprehensive-Data-Security.png";
import StudentParentsPortals from "../img/Students-&-Parent-Portals.png";
import studentstaff from "../img/Student-&-Staff-Ledgers.png";
import WhatsAppMessaging from "../img/WhatsApp-Messaging.png";
import DailyDiray from "../img/Online-Daily-Diary-Feature.png";
import MobileApp from "../img/School-Management-Mobile-App.png";
import BiometricAttendance from  "../img/Biometric-Attendance.png";
import SalaryFee from "../img/Salary-&-Fee-Management.png";
import InventoryManagement from "../img/Inventory-Management.png";
import RemainderFeeCollection from "../img/Reminders-For-Fee-Collection.png";
import SchoolCollegeWeb from "../img/School-&-College-Front-Website.png";
import OnlinePaperGeneration from "../img/Online-Paper-Generation.png";
import ExamResultManagement from "../img/Exams-&-Results-Management.png";

const PostSlider = () => {
    const slider1 = {
        dots: false,
        infinite: true,
        speed: 13000,
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
              slidesToShow: 2.5,
              slidesToScroll: 1,
            }
          }
        ]
      };
      const slider2 = {
        dots: false,
        infinite: true,
        speed: 13000,
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
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <div className="w-full pt-10 pb-8" id="faq">
      <div className="flex px-4 flex-wrap">
        <div className="cb-container min-h-fit">
          <div className="w-full lg:w-4/6 mb-6 lg:mb-12 min-h-fit">
            <div className="pb-markdown min-h-fit font-grotesk-medium font-verdana-fallback text-sm font-sami-bold tracking-wide leading-5 uppercase text-[#1b9ce6]">
              <p>Growth Across All Dimensions</p>
            </div>
            <div className="pb-markdown min-h-fit pt-4 lg:py-5">
              <h3 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl">
              30+ Best School Management Software Modules to Enhance Your Institution's Efficiency </h3>
            </div>
            <div className="pb-markdown min-h-fit mv-type--body text-cool-grey-600 hidden lg:block">
              <p>
              Transform your educational experience with our comprehensive school management software solutions, designed to enhance communication, streamline processes, and empower administrators, teachers, and students across diverse institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="verticel-carousel">
        <Slider {...slider1}>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={cloudComuting}
              alt="Cloud Computing School Mangement System"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={edge}
              alt="Cutting-edge School Mangement Software"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={computerBased}
              alt="Computer Based School Mangement Software"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={AiDriven}
              alt="AI Driven School Mangement Software"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={DataSecurity}
              alt="Data Security School Mangement Software"
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
              alt="Students & Parents Portals"
              width="512"
              height="230"
            />
          </div>
        
        </Slider>
      </div>
      <div className="verticel-carousel mt-10">
        <Slider {...slider2}>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={DailyDiray}
              alt="Online Daily Diary School Mangement Software"
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
              alt="School WhatsApp Messaging"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={BiometricAttendance}
              alt="School Biometric Attendance"
              width="512"
              height="230"
            />
          </div>
          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={SalaryFee}
              alt="Salary & Fee Management"
              width="512"
              height="230"
            />
          </div>

          <div className="px-4">
            <img
              className="img-fluid rounded-2xl carousel-image"
              src={InventoryManagement}
              alt="School Inventory Management"
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
   
       