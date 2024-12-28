import React from "react";
import Slider from "react-slick";
import phone from "../img/capobrain-phone.png";
import tablet from "../img/capobrain-tab.png";
import Desktop from "../img/capobrain-desktop.png";
import AlliedSchool from "../img/schools/1.png";
import EducatorsSchool from "../img/schools/2.png";
import OnlineEducation from  "../img/online-education.png";
import Client2 from "../img/schools/3.png";
import Client3 from "../img/schools/4.png";
import Client4 from "../img/schools/5.png";
import Client5 from "../img/schools/9.png";
import Client6 from "../img/schools/6.png";
import Client7 from "../img/schools/7.png";
import Client8 from "../img/schools/8.png";
import Client9 from "../img/schools/10.png";
import Client11 from "../img/schools/school11.png";
import Client12 from "../img/schools/school12.png";
import Client13 from "../img/schools/school13.png";
import Client15 from "../img/schools/school15.png";
import Client16 from "../img/schools/school16.png";
import Client17 from "../img/schools/school17.png";
import Client18 from "../img/schools/school18.png";
import Client19 from "../img/schools/school19.png";
import Client20 from "../img/schools/school20.png";
import Client21 from "../img/schools/school21.png";
import Client22 from "../img/schools/school22.png";
import Client23 from "../img/schools/school23.png";
import Client24 from "../img/schools/school24.png";
import Client25 from "../img/schools/school25.png";
import Client26 from "../img/schools/school26.png";


const FeatureSlider = () => {
  const slider1 = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    scroll:false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider2 = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 9,
    slidesToScroll: 0.8,
    autoplay: true,
    scroll:false,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1.3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1.3,
        },
      },
    ],
  };
  return (
    <div className="w-full pt-10 lg:pt-20 pb-8" id="faq">
      <div className="flex px-2 flex-wrap">
        <div className="cb-container flex gap-10 min-h-fit">
          <div className="w-full lg:w-4/6 mb-6 lg:mb-12 min-h-fit">
            <div className="pb-markdown min-h-fit font-grotesk-medium font-verdana-fallback text-sm font-sami-bold tracking-wide leading-5 uppercase text-purple-800">
              <p>Schools Choose CapoBrain</p>
            </div>
            <div className="pb-markdown min-h-fit pt-4 lg:py-5">
              <h3 className="mb-3 heading-body">
              Delivering Excellence to Over 50+ Educational Institutions with Our Best School Management Software</h3>
            </div>
            <div className="pb-markdown min-h-fit mv-type--body text-cool-grey-600 hidden lg:block">
              <p>
              Our best educational management software is trusted by over 50+ schools, enhancing their management efficiency. Join us in transforming educational experiences and driving success with our comprehensive solutions.
              </p>
            </div>
          </div>
          <div className="w-2/6 hidden lg:flex items-center justify-center">
          <img
            className="w-full p-3 h-auto object-cover"
            src={OnlineEducation}
            height={100}
            alt="Online Education"
            title="Best School Management System in Pakistan"
          />

          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        {/* <img
          src={Desktop}
          width="1519"
          height="557"
          loading="eager"
          alt="Capobrain School Management System Dashboard"
          className="absolute w-auto left-1/2 top-0 transform -translate-x-1/2 h-full z-10 hidden lg:flex"
        />
        <img
          src={tablet}
          width="319"
          height="557"
          loading="eager"
          alt="Customizable School ERP Software"
          className="absolute w-auto left-1/2 top-0 transform -translate-x-1/2 h-full z-10 hidden sm:flex lg:hidden"
        />
        <img
          src={phone}
          width="319"
          height="557"
          loading="eager"
          alt="Mobile-Friendly School ERP"
          className="absolute w-auto left-1/2 top-0 transform -translate-x-1/2 h-full z-10 flex sm:hidden"
        /> */}
        <div className="verticel-carousel sm:pt-10">
          <Slider {...slider1}>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={AlliedSchool}
                alt="Allied School Management System"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={EducatorsSchool}
                alt="The Educators School ERP Software Solutions"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client2}
                alt="Allied School ERP Software Solutions"
                width="242"
                height="auto"
              />
            </div>

            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client3}
                alt="Allied Best School Management Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client4}
                alt="Best School ERP Software for Institutions"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client5}
                alt="Allied School ERP for Fee Collection"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client6}
                alt="Allied School ERP System for Administration"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client7}
                alt="Allied School Gradebook Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client8}
                alt="Cloud-Based School ERP Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client9}
                alt="Allied School Gradebook Software"
                width="242"
                height="auto"
              />
            </div>
             <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client11}
                alt="The Educators School Management System (SMS)"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client12}
                alt="Allied School Management System (SMS)"
                width="242"
                height="auto"
              />
            </div>
          </Slider>
        </div>
        <div className="verticel-carousel mt-4 sm:pb-8">
          <Slider {...slider2}>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client13}
                alt="Education Software Development"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client25}
                alt="School Report Card Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client15}
                alt="Student Attendance Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client16}
                alt="Timetable Scheduling Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client17}
                alt="School Software Solutions in Pakistan"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client18}
                alt="Allied School Exam Management Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client19}
                alt="Student Information System (SIS)"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client20}
                alt="The Educators School Management System (SMS)"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client21}
                alt="Allied Student Information System (SIS)"
                width="242"
                height="auto"
              />
            </div>    
             <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client22}
                alt="Best School Management Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client23}
                alt="All-in-One School Management Software"
                width="242"
                height="auto"
              />
            </div>
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client24}
                alt="School ERP Software Solutions"
                width="242"
                height="auto"
              />
            </div>   
            <div className="px-2">
              <img
                className="rounded-xl carousel-image"
                src={Client26}
                alt="School ERP Software Solutions"
                width="242"
                height="auto"
              />
            </div>      
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default FeatureSlider;
