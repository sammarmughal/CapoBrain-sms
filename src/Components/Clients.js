import React from "react";
import Slider from 'react-slick';
import Client0 from "../img/client0.avif";
import Client1 from "../img/client1.avif";
import Client2 from "../img/client2.avif";
import Client3 from "../img/client4.avif";
import Client4 from "../img/client5.avif";
import Client5 from "../img/5.png";
import Client6 from "../img/client6.avif";
import Client7 from "../img/client7.avif";
import Client8 from "../img/client8.avif";
import Client9 from "../img/client9.avif";

const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 6,  // Number of slides to show at once
        slidesToScroll: 1,  // Number of slides to scroll at once
        autoplay: true,
        autoplaySpeed: 10,
        arrows: false,
        responsive: [
          {
            breakpoint: 768, // Adjust number of slides on smaller screens
            settings: {
              slidesToShow: 4,
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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="cb-container sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
        <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl">
          Our Trusted Clients{" "}
        </h2>
      </div>

      {/* End Title */}

      {/* Grid */}
      <div className="verticel-carousel">
        {/* Client Logo 1 */}
        <Slider {...settings}>
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client0}
              alt="Allied School School Management System"
              width="220"
              height="150"
            />
          </div>

          {/* Client Logo 2 */}
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client9}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>

          {/* Client Logo 3 */}
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client1}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>

          {/* Client Logo 4 */}
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client2}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>

          {/* Additional Client Logos */}
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client3}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>

          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client7}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client5}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>

          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client6}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>

          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client7}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client8}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>
          <div className="shrink-0 transition hover:-translate-y-1">
            <img
              className="img-fluid client-img"
              src={Client9}
              alt="Allied School"
              width="220"
              height="150"
            />
          </div>
        </Slider>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col bg-gray-200/50 p-8">
        <dt className="text-sm font-semibold leading-6 text-gray-600">Active Users</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">50+</dd>
      </div>
      <div className="flex flex-col bg-gray-200/50 p-8">
        <dt className="text-sm font-semibold leading-6 text-gray-600">Transactions Today</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">1.23M</dd>
      </div>
      <div className="flex flex-col bg-gray-200/50 p-8">
        <dt className="text-sm font-semibold leading-6 text-gray-600">Total Revenue</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">5.6M</dd>
      </div>
      <div className="flex flex-col bg-gray-200/50 p-8">
        <dt className="text-sm font-semibold leading-6 text-gray-600">Happy Customers</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">98%</dd>
      </div>
    </dl>
    </div>
  );
};

export default Clients;
